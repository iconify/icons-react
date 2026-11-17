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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.j06azfmse {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5v14M3 9h18v10M3 16h18M7 9v7");
}

.r_g5oubii {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 9h18v7H3Z");
}
</style><g class="ft5dv1b6b"><path class="r_g5oubii"/><path class="j06azfmse"/></g>`,
		"fallback": "coolicons:bed-duotone-sharp",
	});
}

export default Component;
