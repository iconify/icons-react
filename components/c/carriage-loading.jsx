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
		"content": `<style>.hq-h8uxcp {
  d: path("M2.5 3.5h19v13h-19Z");
}

.jg7iuob5v {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM10 6.25h4v7.5h-4Zm0 4h4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hq-h8uxcp"/><path class="jg7iuob5v"/></g>`,
		"fallback": "uix-sharp:carriage-loading",
	});
}

export default Component;
