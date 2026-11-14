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
		"content": `<style>.vu2-07bpl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 6h5.75A2.625 2.625 0 0 1 14 8.625v.25a2.625 2.625 0 0 1-2.625 2.625h-5.75A2.625 2.625 0 0 1 3 8.875v-.25A2.625 2.625 0 0 1 5.625 6M5.5 11.5l-1 8h4l.75-8M14 8.75h4M19.5 3h.5a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 20 21h-.5a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 19.5 3");
}
</style><path class="vu2-07bpl"/>`,
		"fallback": "uix:drill-wall",
	});
}

export default Component;
