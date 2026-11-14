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
		"content": `<style>.i7ud9iwsc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.216 8.995l1.428-4A1.5 1.5 0 0 1 6.057 4h3.814a1.5 1.5 0 0 1 1.413 2.005l-1.428 4A1.5 1.5 0 0 1 8.443 11H4.629a1.5 1.5 0 0 1-1.413-2.005M14.5 21.5l3.25-17l3.25 17m-6-13h5.5m-16.75-1h7M4 16.5h8m-2-2l2 2l-2 2");
}
</style><path class="i7ud9iwsc"/>`,
		"fallback": "uix:feed-in",
	});
}

export default Component;
