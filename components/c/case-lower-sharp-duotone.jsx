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

.s4_52vbkk {
  stroke-opacity: 0.4;
  d: path("M11 12.5C11 14.9853 8.9853 17 6.5 17C4.0147 17 2 14.9853 2 12.5C2 10.0147 4.0147 8 6.5 8C8.9853 8 11 10.0147 11 12.5ZM11 6V18");
}

.ulpc5d51o {
  d: path("M22 14C22 15.6569 20.6569 17 19 17C17.3431 17 16 15.6569 16 14C16 12.3431 17.3431 11 19 11C20.6569 11 22 12.3431 22 14ZM22 9V18");
}
</style><g class="gp_8x1bzb"><path class="s4_52vbkk"/><path class="ulpc5d51o"/></g>`,
		"fallback": "keyline-icons:case-lower-sharp-duotone",
	});
}

export default Component;
