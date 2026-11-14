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
		"content": `<style>.arwzxcbgg {
  d: path("M12.7 19H2.5V5h19v8.5");
}

.c-h46ebis {
  d: path("m10 9l5 3l-5 3Zm5.5 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="arwzxcbgg"/><path class="c-h46ebis"/></g>`,
		"fallback": "uix-sharp:copyright-video",
	});
}

export default Component;
