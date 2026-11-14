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
		"content": `<style>.b3x1yvboz {
  d: path("M18 14.5q.5 3 3.5 3.5q-3 .5-3.5 3.5q-.5-3-3.5-3.5q3-.5 3.5-3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zsn13c4wd {
  d: path("M14.7 21H3.5V4.5h17V14M8 2.5v4m8-4v4m-12.5 3h17M8 13.5h.01m3.99 0h.01M8 17.5h.01");
}
</style><g class="ulnmmdpxh"><path class="zsn13c4wd"/><path class="b3x1yvboz"/></g>`,
		"fallback": "uix-sharp:beauty-appointment",
	});
}

export default Component;
