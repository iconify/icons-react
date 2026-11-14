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
		"content": `<style>.y2nahlbyo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6.25 0a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm8.75 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM5.75 10.5h3.5m-3.5 3h3.5m5.5-3h3.5m-3.5 3h3.5");
}
</style><path class="y2nahlbyo"/>`,
		"fallback": "uix-sharp:carbon-dioxide",
	});
}

export default Component;
