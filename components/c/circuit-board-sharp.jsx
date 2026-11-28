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

.ickvo7b_n {
  d: path("M18 7H23M18 12H23M18 17H23M5 18H11M2 2H18V22H2V2ZM6 6H14V13H6V6Z");
}

.u2zjuxbiz {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15 18C15 18.552 14.552 19 14 19C13.448 19 13 18.552 13 18C13 17.448 13.448 17 14 17C14.552 17 15 17.448 15 18Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="ickvo7b_n"/><path clip-rule="evenodd" class="u2zjuxbiz"/></g>`,
		"fallback": "keyline-icons:circuit-board-sharp",
	});
}

export default Component;
