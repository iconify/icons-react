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

.uazw20bli {
  d: path("M2.5 15h19m-17 0v6m15-6v6M12 15s-4.75-4-4.75-7.25a4.75 4.75 0 0 1 9.5 0C16.75 11 12 15 12 15");
}

.w_8484bmm {
  d: path("M10.5 7.75a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="uazw20bli"/><path class="w_8484bmm"/></g>`,
		"fallback": "uix:desk-assignment",
	});
}

export default Component;
