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
		"content": `<style>.a9txrd2dq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 6h10.5A1.75 1.75 0 0 1 19 7.75v5.5A1.75 1.75 0 0 1 17.25 15H6.75A1.75 1.75 0 0 1 5 13.25v-5.5A1.75 1.75 0 0 1 6.75 6M12 2.5V6m-3.5 9L6 21.5m9.5-6.5l2.5 6.5M12 15v6.5");
}
</style><path class="a9txrd2dq"/>`,
		"fallback": "uix:easel",
	});
}

export default Component;
