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
		"content": `<style>.b5-0i23-s {
  d: path("M10 11.5L7.5 14l2.5 2.5m4-5l2.5 2.5l-2.5 2.5");
}

.k6vaj69bs {
  d: path("M4.5 2.5h15v19h-15Zm3 3.5h3m3 0h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k6vaj69bs"/><path class="b5-0i23-s"/></g>`,
		"fallback": "uix-sharp:code-template",
	});
}

export default Component;
