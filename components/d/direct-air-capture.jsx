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
		"content": `<style>.h0s3idrxy {
  d: path("M11.25 12a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM15 12h.01M2.5 12h6M6.25 9.75L8.5 12l-2.25 2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xjjie9j-h {
  d: path("M8.5 2.5h13v19h-13Z");
}
</style><g class="ulnmmdpxh"><path class="xjjie9j-h"/><path class="h0s3idrxy"/></g>`,
		"fallback": "uix-sharp:direct-air-capture",
	});
}

export default Component;
