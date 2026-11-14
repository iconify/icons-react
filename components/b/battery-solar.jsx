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
		"content": `<style>.rc_t2po_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.6 12H2.5V3h15v7.7M20 6v3m-4 8.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm5 0h1M17.75 21v1m-3.25-4.25h-1m4.25-3.25v-1M20 20l.75.75M15.5 20l-.75.75m.75-5.25l-.75-.75m5.25.75l.75-.75");
}
</style><path class="rc_t2po_w"/>`,
		"fallback": "uix-sharp:battery-solar",
	});
}

export default Component;
