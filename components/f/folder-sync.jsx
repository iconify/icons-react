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
		"content": `<style>.bf9h3ib3m {
  d: path("M12 10a3.5 3.5 0 0 1 1.75 6.531");
}

.gt9hcvblx {
  d: path("m8 10.25l2.25.25l-1 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q3wixnhae {
  d: path("M3 7a2 2 0 0 1 2-2h4.5l2 2H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.re1t9zb4z {
  d: path("m16 16.75l-2.25-.25l1-2M12 17a3.5 3.5 0 0 1-1.75-6.531");
}
</style><g class="hntgybcog"><path class="q3wixnhae"/><path class="bf9h3ib3m"/><path class="re1t9zb4z"/><path class="gt9hcvblx"/></g>`,
		"fallback": "uix:folder-sync",
	});
}

export default Component;
