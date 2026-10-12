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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oxwicob_u {
  d: path("m9 9.75l2 2l4-4");
}

.yx035clkh {
  d: path("M12 21.25S5 15.5 5 9.75a7 7 0 0 1 14 0c0 5.75-7 11.5-7 11.5");
}
</style><g class="hntgybcog"><path class="yx035clkh"/><path class="oxwicob_u"/></g>`,
		"fallback": "iconoven:check-in-pin",
	});
}

export default Component;
