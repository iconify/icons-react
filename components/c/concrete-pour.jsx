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

.k9z9loyll {
  d: path("M12.75 6.5C16 8 17 11 17 15.5h-3.25c0-2-1-4-2.75-4.5ZM4 18.5h16a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 20A1.5 1.5 0 0 1 4 18.5");
}

.qpxulrj8s {
  d: path("m13.486 4.408l-6.92-1.454l-1.71 4.698l6.236 3.334");
}
</style><g class="hntgybcog"><path class="qpxulrj8s"/><path class="k9z9loyll"/></g>`,
		"fallback": "uix:concrete-pour",
	});
}

export default Component;
