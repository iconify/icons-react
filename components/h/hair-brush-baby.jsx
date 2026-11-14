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
		"content": `<style>.evckhzz1o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 8h11a3 3 0 0 1 3 3a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3a3 3 0 0 1 3-3m5.5 6za2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2M7 3.5V8m3.5-4.5V8m3-4.5V8M17 3.5V8");
}
</style><path class="evckhzz1o"/>`,
		"fallback": "uix:hair-brush-baby",
	});
}

export default Component;
