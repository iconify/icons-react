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
		"content": `<style>.dldm0nzjv {
  d: path("M12.75 11h4.75q1 0 .86.99l-.47 3.27q-.14.99-1.14.99H13.5q-1 0-1.14-.99l-.47-3.27q-.14-.99.86-.99");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mxppvqbza {
  d: path("M4.75 2.75h14.5a2 2 0 0 1 2 2v3.5h-12v10.5h12v2.5H4.75a2 2 0 0 1-2-2V4.75a2 2 0 0 1 2-2");
}
</style><g class="hntgybcog"><path class="mxppvqbza"/><path class="dldm0nzjv"/></g>`,
		"fallback": "iconoven:coffee-maker",
	});
}

export default Component;
