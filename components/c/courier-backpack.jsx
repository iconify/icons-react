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
		"content": `<style>.bnghffbam {
  d: path("M4.5 21.5V10a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5v11.5ZM9.5 5V4A1.5 1.5 0 0 1 11 2.5h2A1.5 1.5 0 0 1 14.5 4v1");
}

.gmexwbb9r {
  d: path("M7.5 21.5v-7h9v7m-7-7v-4h5v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="bnghffbam"/><path class="gmexwbb9r"/></g>`,
		"fallback": "uix:courier-backpack",
	});
}

export default Component;
