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
		"content": `<style>.h98gxob2v {
  d: path("m13.856 4.356l5.788 5.788a2.625 2.625 0 0 1 0 3.712l-5.788 5.788a2.625 2.625 0 0 1-3.712 0l-5.788-5.788a2.625 2.625 0 0 1 0-3.712l5.788-5.788a2.625 2.625 0 0 1 3.712 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qiv9xncsn {
  d: path("m13.061 9.311l1.628 1.628a1.5 1.5 0 0 1 0 2.122l-1.628 1.628a1.5 1.5 0 0 1-2.122 0l-1.628-1.628a1.5 1.5 0 0 1 0-2.122l1.628-1.628a1.5 1.5 0 0 1 2.122 0");
}
</style><g class="hntgybcog"><path class="h98gxob2v"/><path class="qiv9xncsn"/></g>`,
		"fallback": "uix:component-instance",
	});
}

export default Component;
