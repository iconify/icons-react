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
		"content": `<style>.au13gvb7v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 2.5h3.75A2.625 2.625 0 0 1 11.5 5.125v1.25A2.625 2.625 0 0 1 8.875 9h-3.75A2.625 2.625 0 0 1 2.5 6.375v-1.25A2.625 2.625 0 0 1 5.125 2.5m10 10h3.75a2.625 2.625 0 0 1 2.625 2.625v1.25A2.625 2.625 0 0 1 18.875 19h-3.75a2.625 2.625 0 0 1-2.625-2.625v-1.25a2.625 2.625 0 0 1 2.625-2.625M7 9v2.5m-2.25 0h4.5M17 19v2.5m-2.25 0h4.5M11.5 5.75H17v6.75");
}
</style><path class="au13gvb7v"/>`,
		"fallback": "uix:grpc",
	});
}

export default Component;
