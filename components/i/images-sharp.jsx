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

.oy3ht5cdt {
  d: path("M3 7V21H17M21 14.14L17.889 11.27L14.778 13.42L11.667 10.56L7 14.85M7 3H21V17H7V3Z");
}

.s84gf295k {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 7C12 7.55 11.552 8 11 8C10.448 8 10 7.55 10 7C10 6.45 10.448 6 11 6C11.552 6 12 6.45 12 7Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="oy3ht5cdt"/><path clip-rule="evenodd" class="s84gf295k"/></g>`,
		"fallback": "keyline-icons:images-sharp",
	});
}

export default Component;
