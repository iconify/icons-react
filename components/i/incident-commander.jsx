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
		"content": `<style>.jxg_80b3m {
  d: path("m6 15.25l6 3.25l6-3.25");
}

.lut9_1cos {
  d: path("M8.5 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM3.5 21c0-4.75 3.75-8 8.5-8s8.5 3.25 8.5 8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lut9_1cos"/><path class="jxg_80b3m"/></g>`,
		"fallback": "uix-sharp:incident-commander",
	});
}

export default Component;
