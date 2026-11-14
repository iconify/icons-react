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
		"content": `<style>.g_wa6vb7a {
  d: path("m15.22 5.245l3.535 3.535a1.5 1.5 0 0 1 0 2.122l-.353.353a1.5 1.5 0 0 1-2.122 0L12.745 7.72a1.5 1.5 0 0 1 0-2.122l.353-.353a1.5 1.5 0 0 1 2.122 0M5.779 3.128a3.75 3.75 0 1 1-2.651 2.651");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.isqhp5djo {
  d: path("m5.75 3.25l1 3.5l-3.5-1M4 20L14.5 9.5m-5 0L20 20");
}
</style><g class="hntgybcog"><path class="g_wa6vb7a"/><path class="isqhp5djo"/></g>`,
		"fallback": "uix:cross-training",
	});
}

export default Component;
