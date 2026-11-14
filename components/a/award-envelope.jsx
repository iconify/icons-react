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
		"content": `<style>.dka55lxzx {
  d: path("M3.5 13.5L12 18l8.5-4.5m-7.986-9.333l.162.368a1.5 1.5 0 0 0 1.222.887l.4.041a.562.562 0 0 1 .317.978l-.299.268a1.5 1.5 0 0 0-.467 1.436l.085.392a.562.562 0 0 1-.832.605l-.347-.202a1.5 1.5 0 0 0-1.51 0l-.347.202a.562.562 0 0 1-.832-.605l.085-.392a1.5 1.5 0 0 0-.467-1.436l-.299-.268a.562.562 0 0 1 .317-.978l.4-.041a1.5 1.5 0 0 0 1.222-.887l.162-.368a.562.562 0 0 1 1.028 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v-5tpjvkf {
  d: path("M6.5 12.5h11A3.5 3.5 0 0 1 21 16v2a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 18v-2a3.5 3.5 0 0 1 3.5-3.5");
}
</style><g class="hntgybcog"><path class="v-5tpjvkf"/><path class="dka55lxzx"/></g>`,
		"fallback": "uix:award-envelope",
	});
}

export default Component;
