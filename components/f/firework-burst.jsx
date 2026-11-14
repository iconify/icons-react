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
		"content": `<style>.otm1xwb0v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 5.75V8.5m0 7v2.75M5.75 12H8.5m7 0h2.75M14.5 9.5l2-2m-7 2l-2-2m7 7l2 2m-7-2l-2 2m4.5-14h.01m-.01 19h.01M2.5 12h.01m18.99 0h.01m-2.76-6.75h.01m-13.51 0h.01m13.49 13.5h.01m-13.51 0h.01");
}
</style><path class="otm1xwb0v"/>`,
		"fallback": "uix-sharp:firework-burst",
	});
}

export default Component;
