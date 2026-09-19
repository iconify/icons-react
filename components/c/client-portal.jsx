import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o__4f5q4i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.06 35.525c-.866-1.264-2.11-3.175-2.977-4.439c-1.93-2.814-3.66-5.746-4.872-8.944c-2.04-5.38-.189-10.72 4.77-13.339c3.429-1.81 7.136-2.639 11.038-1.97c3.739.64 5.977 3.835 5.387 7.576c-.18 1.147-.547 2.235-1.027 3.291c-2.339 5.145-4.646 10.303-7.003 15.439c-3.346 7.293-11.007 10.175-18.367 6.944c-5.333-2.34-9.026-6.102-10.33-11.928a7.7 7.7 0 0 1-.044-3.096c.379-2.078.946-2.358 2.771-1.317c5.611 3.201 11.212 6.419 16.819 9.627c1.048.6 2.784 1.563 3.835 2.156");
}
</style><path class="o__4f5q4i"/>`,
		"fallback": "arcticons:client-portal",
	});
}

export default Component;
