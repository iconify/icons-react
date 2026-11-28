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
		"content": `<style>.ctmdu_t7r {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M21 3V9H3V3H21ZM12 12H17C17.552 12 18 12.448 18 13V17C18 17.552 17.552 18 17 18H7C6.448 18 6 17.552 6 17V13C6 12.448 6.448 12 7 12H12Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s5agamr9b {
  d: path("M3 9H21M3 3H21V21H3V3ZM7 13H17V17H7V13Z");
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="ctmdu_t7r"/><path class="s5agamr9b"/></g>`,
		"fallback": "keyline-icons:iframe-sharp-fill",
	});
}

export default Component;
