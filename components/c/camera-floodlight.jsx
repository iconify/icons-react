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
		"content": `<style>.wq2ql9bpz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h17V9h-17Zm4.5 13a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM6.5 12L5 15.5M17.5 12l1.5 3.5m-7 1h.01");
}
</style><path class="wq2ql9bpz"/>`,
		"fallback": "uix-sharp:camera-floodlight",
	});
}

export default Component;
