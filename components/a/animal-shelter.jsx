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
		"content": `<style>.azlmfgbpz {
  d: path("M2.5 11L12 3.5l9.5 7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j6f47_hhv {
  d: path("M7.5 21v-6a4.5 4.5 0 0 1 9 0v6m-6.25-6.5h.01m3.49 0h.01m-1.76 3h.01");
}

.vrjexlb9w {
  d: path("M4.5 9.5V21h15V9.5");
}
</style><g class="hntgybcog"><path class="azlmfgbpz"/><path class="vrjexlb9w"/><path class="j6f47_hhv"/></g>`,
		"fallback": "uix:animal-shelter",
	});
}

export default Component;
