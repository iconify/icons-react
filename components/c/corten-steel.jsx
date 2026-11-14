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
		"content": `<style>.f5w2n3g7f {
  d: path("M7.5 7.5q2.25-2 4.5 0t4.5 0m-9 4.5q2.25-2 4.5 0t4.5 0m-9 4.5q2.25-2 4.5 0t4.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o72zbacef {
  d: path("M8.875 2.5h6.25A4.375 4.375 0 0 1 19.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-6.25A4.375 4.375 0 0 1 4.5 17.125V6.875A4.375 4.375 0 0 1 8.875 2.5");
}
</style><g class="hntgybcog"><path class="o72zbacef"/><path class="f5w2n3g7f"/></g>`,
		"fallback": "uix:corten-steel",
	});
}

export default Component;
