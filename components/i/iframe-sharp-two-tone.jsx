import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.j29gsrboe {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 2H21C21.552 2 22 2.448 22 3V21C22 21.552 21.552 22 21 22H3C2.448 22 2 21.552 2 21V3C2 2.448 2.448 2 3 2H12ZM21 3H3V9H21V3Z");
  stroke: none;
}

.s5agamr9b {
  d: path("M3 9H21M3 3H21V21H3V3ZM7 13H17V17H7V13Z");
}
</style><g class="gp_8x1bzb"><path class="j29gsrboe"/><path class="s5agamr9b"/></g>`,
		"fallback": "keyline-icons:iframe-sharp-two-tone",
	});
}

export default Component;
