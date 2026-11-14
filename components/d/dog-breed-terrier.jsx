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
		"content": `<style>.ykh_4ibpq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 10h8l.25-5.25l1.25-2l1 2h1L21.5 7v2.5l-3.5.75l-.5 4.75h-13v-4L3 5.75L5.25 10ZM6 15v5.5M9 15v5.5m4.5-5.5v5.5m3-5.5v5.5m1.25-13h.01");
}
</style><path class="ykh_4ibpq"/>`,
		"fallback": "uix:dog-breed-terrier",
	});
}

export default Component;
