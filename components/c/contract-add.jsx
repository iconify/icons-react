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

.hzvzdabpm {
  d: path("M13.778 20.5H5v-18h8.5L19 8v4.422M13.5 2.5V8H19M8 7.5h3");
}

.qknby0anh {
  d: path("M8 16.5c1-3.5 2.75-3.5 2.75-1c0 2 1.25 1.5 2.25 0m5-.5v6m-3-3h6");
}
</style><g class="hntgybcog"><path class="hzvzdabpm"/><path class="qknby0anh"/></g>`,
		"fallback": "uix:contract-add",
	});
}

export default Component;
