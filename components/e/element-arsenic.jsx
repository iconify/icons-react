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
		"content": `<style>.culm9zbxu {
  d: path("m3 13l4-8l8-1.5L21 9l-1 8l-8 3.5l-7.5-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xzeqa83-v {
  d: path("M8 12q.5-4 4.5-4.75");
}
</style><g class="ulnmmdpxh"><path class="culm9zbxu"/><path class="xzeqa83-v"/></g>`,
		"fallback": "uix-sharp:element-arsenic",
	});
}

export default Component;
