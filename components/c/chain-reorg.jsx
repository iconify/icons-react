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
		"content": `<style>.emsrzvbwk {
  d: path("m10 7.5l2 2l2-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ydw3i-brb {
  d: path("M2.5 12.5h5v5h-5Zm7 0h5v5h-5Zm7 0h5v5h-5Zm-9 2.5h2m5 0h2M5 9.5c0-5 7-5 7 0");
}
</style><g class="ulnmmdpxh"><path class="ydw3i-brb"/><path class="emsrzvbwk"/></g>`,
		"fallback": "uix-sharp:chain-reorg",
	});
}

export default Component;
