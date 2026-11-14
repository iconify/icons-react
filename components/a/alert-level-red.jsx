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
		"content": `<style>.itx-l2b8y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.076 8.666l3.618 6.664a3.5 3.5 0 0 1-3.076 5.17H8.382a3.5 3.5 0 0 1-3.076-5.17l3.618-6.664a3.5 3.5 0 0 1 6.152 0M12 9.5V14m0 3.25h.01");
}
</style><path class="itx-l2b8y"/>`,
		"fallback": "uix:alert-level-red",
	});
}

export default Component;
