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
		"content": `<style>.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.tgumi0jqd {
  d: path("M11.427 19.5H3.5c-.6 0-1-.4-1-1c0-3 3-5 7-5c1.213 0 2.333.184 3.306.523M5.5 6.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tgumi0jqd"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:cfo",
	});
}

export default Component;
