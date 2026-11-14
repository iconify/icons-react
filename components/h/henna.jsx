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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v028mvb4a {
  d: path("M10.5 17.5q.5-4.5 6-4.5q-.5 4.5-6 4.5Z");
}

.xdo0xnzyq {
  d: path("M7.5 12.25v-5.5a1.5 1.5 0 0 1 3 0v-2a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1 3 0V7.5a1.5 1.5 0 0 1 3 0v7.75c0 3.5-2.5 5.5-6 5.5H12c-2.5 0-4-1.5-5.25-3.5L4 12.75A1.5 1.5 0 0 1 6.5 11zm3-5.5v3.5m3-4.5v4.5m3-2.75v2.75");
}
</style><g class="ulnmmdpxh"><path class="xdo0xnzyq"/><path class="v028mvb4a"/></g>`,
		"fallback": "uix-sharp:henna",
	});
}

export default Component;
