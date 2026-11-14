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

.vex35yv_q {
  d: path("M10.252 20.332L9.25 21L7 19.5L4.75 21L2.5 19.5V7h11v6.4");
}

.zgksllb6z {
  d: path("M6 7V3h12v4.1M5.5 11h5m6.75 1l4.5 9.5h-9Zm0 4.25v1.25m0 2h.01");
}
</style><g class="ulnmmdpxh"><path class="vex35yv_q"/><path class="zgksllb6z"/></g>`,
		"fallback": "uix-sharp:bill-spike-stack",
	});
}

export default Component;
