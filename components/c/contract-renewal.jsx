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
		"content": `<style>.b_c3q5dqf {
  d: path("M7.5 7.5L9.25 9l-1.5 1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p6n_bt1rh {
  d: path("M14.924 14.868a5 5 0 1 1-5.792-5.792");
}

.ukfmo6aba {
  d: path("M18.485 5.515za1.25 1.25 0 0 1 0 1.767l-5.583 5.584a1.5 1.5 0 0 1-.586.362l-.99.33a.699.699 0 0 1-.884-.884l.33-.99a1.5 1.5 0 0 1 .362-.586l5.584-5.583a1.25 1.25 0 0 1 1.767 0");
}
</style><g class="hntgybcog"><path class="ukfmo6aba"/><path class="p6n_bt1rh"/><path class="b_c3q5dqf"/></g>`,
		"fallback": "uix:contract-renewal",
	});
}

export default Component;
