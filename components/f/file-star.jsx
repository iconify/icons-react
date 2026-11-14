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

.s0qg463kv {
  d: path("M13.5 2.5v4a2 2 0 0 0 2 2h4m-6.986 3.417l.162.368a1.5 1.5 0 0 0 1.222.887l.4.041a.562.562 0 0 1 .317.978l-.299.268a1.5 1.5 0 0 0-.467 1.436l.085.392a.562.562 0 0 1-.832.605l-.347-.202a1.5 1.5 0 0 0-1.51 0l-.347.202a.562.562 0 0 1-.832-.605l.085-.392a1.5 1.5 0 0 0-.467-1.436l-.299-.268a.562.562 0 0 1 .317-.978l.4-.041a1.5 1.5 0 0 0 1.222-.887l.162-.368a.562.562 0 0 1 1.028 0");
}

.w_a5jubhp {
  d: path("M7 2.5h6.5l6 6V19a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5A2.5 2.5 0 0 1 7 2.5");
}
</style><g class="hntgybcog"><path class="w_a5jubhp"/><path class="s0qg463kv"/></g>`,
		"fallback": "uix:file-star",
	});
}

export default Component;
