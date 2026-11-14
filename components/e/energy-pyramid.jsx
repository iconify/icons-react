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
		"content": `<style>.qb9-s99qs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.955 17.896l6.517-11.662a1.75 1.75 0 0 1 3.056 0l6.517 11.662a1.75 1.75 0 0 1-1.528 2.604H5.483a1.75 1.75 0 0 1-1.528-2.604M8.75 9.25h6.5M5.5 15h13M12 17.75h.01");
}
</style><path class="qb9-s99qs"/>`,
		"fallback": "uix:energy-pyramid",
	});
}

export default Component;
