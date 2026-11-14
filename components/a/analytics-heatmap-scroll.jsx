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
		"content": `<style>.cenj-qwck {
  fill: currentColor;
  d: path("M8 9.25h5.5v5.5H8Zm5.5-5.5H19v5.5h-5.5Z");
}

.omqk0r47v {
  d: path("M21.75 12.5v7.75m0-16.5v6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wlr74w3qh {
  d: path("M2.5 3.75H19v16.5H2.5Zm5.5 0v16.5m5.5-16.5v16.5m-11-11H19m-16.5 5.5H19");
}
</style><g class="ulnmmdpxh"><path class="wlr74w3qh"/><path class="cenj-qwck"/><path class="omqk0r47v"/></g>`,
		"fallback": "uix-sharp:analytics-heatmap-scroll",
	});
}

export default Component;
