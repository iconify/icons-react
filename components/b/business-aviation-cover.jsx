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
		"content": `<style>.afqpnpzlk {
  d: path("M12 6.25c.5 0 .75.5.75 1V10l3 2v1l-3-.75v2.25l1 .75V16L12 15.5l-1.75.5v-.75l1-.75v-2.25l-3 .75v-1l3-2V7.25c0-.5.25-1 .75-1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hnvnn0bgl {
  d: path("m12 2.75l7.5 2.75v6c0 4.7-3.1 8-7.5 9.75c-4.4-1.75-7.5-5.05-7.5-9.75v-6Z");
}
</style><g class="hntgybcog"><path class="hnvnn0bgl"/><path class="afqpnpzlk"/></g>`,
		"fallback": "uix:business-aviation-cover",
	});
}

export default Component;
