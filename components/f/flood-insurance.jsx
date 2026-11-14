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

.hnvnn0bgl {
  d: path("m12 2.75l7.5 2.75v6c0 4.7-3.1 8-7.5 9.75c-4.4-1.75-7.5-5.05-7.5-9.75v-6Z");
}

.lsfwa5b7z {
  d: path("M7.5 9.5q2.25-2 4.5 0t4.5 0m-9 3.5q2.25-2 4.5 0t4.5 0m-7 3.5q1.25-1 2.5 0t2.5 0");
}
</style><g class="hntgybcog"><path class="hnvnn0bgl"/><path class="lsfwa5b7z"/></g>`,
		"fallback": "uix:flood-insurance",
	});
}

export default Component;
