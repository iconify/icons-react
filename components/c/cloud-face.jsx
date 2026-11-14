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

.ho-skwd7l {
  d: path("M7 19h10c2.5 0 4.5-2 4.5-4.5S19.5 10 17 10c-.5-3.5-3-5.5-6-5.5c-3.5 0-6 2.5-6 6c-1.5.5-2.5 2.25-2.5 4.25C2.5 17 4.5 19 7 19m2.5-7.5h.01m4.99 0h.01");
}

.rrrff57nu {
  d: path("M9.5 14.25a3 3 0 0 0 5 0");
}
</style><g class="hntgybcog"><path class="ho-skwd7l"/><path class="rrrff57nu"/></g>`,
		"fallback": "uix:cloud-face",
	});
}

export default Component;
