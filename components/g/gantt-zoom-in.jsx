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
		"content": `<style>.b3qfjvbjt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v18m9-16h8m-12 5h8m-10 5h5m6.5 0v6m-3-3h6");
}
</style><path class="b3qfjvbjt"/>`,
		"fallback": "uix:gantt-zoom-in",
	});
}

export default Component;
