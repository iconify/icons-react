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
		"content": `<style>.le-lvabqc {
  d: path("M7.75 9a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm1.75 7v5.5M18 14l4 7.5h-8Zm0 3.25v1M18 20h.01");
}

.napbumb6j {
  d: path("m9.5 2.5l2.057 3.668l4.125.823l-2.853 3.091l.492 4.177L9.5 12.5l-3.821 1.759l.492-4.177l-2.853-3.091l4.125-.823Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="napbumb6j"/><path class="le-lvabqc"/></g>`,
		"fallback": "uix-sharp:allergy-alert",
	});
}

export default Component;
