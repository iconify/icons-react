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
		"content": `<style>.zaqlotauc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4.5zA1.5 1.5 0 0 1 5.5 6v12A1.5 1.5 0 0 1 4 19.5A1.5 1.5 0 0 1 2.5 18V6A1.5 1.5 0 0 1 4 4.5m16 0zA1.5 1.5 0 0 1 21.5 6v12a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5V6A1.5 1.5 0 0 1 20 4.5M5.5 7l2.25 2.5L10 7l2 2.5L14 7l2.25 2.5L18.5 7m-13 10l2.25-2.5L10 17l2-2.5l2 2.5l2.25-2.5L18.5 17");
}
</style><path class="zaqlotauc"/>`,
		"fallback": "uix:bellows",
	});
}

export default Component;
