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
		"content": `<style>.uv535febe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5q-4 8 0 16m8-16q3.298 6.597 1.157 13.194m-.791 2.037q-.174.385-.366.769m-1.75-13A2.25 2.25 0 0 0 9.5 7.75v7.75m-2-5.5h4m7.5 6.25v5.5m2.382-4.125l-4.764 2.75m4.764 0l-4.764-2.75");
}
</style><path class="uv535febe"/>`,
		"fallback": "uix:function-cold-start",
	});
}

export default Component;
