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
		"content": `<style>.trf8dyb2q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 20.25v-12m5.25 5.25L12 8.25L6.75 13.5m12.5-9.75H4.75");
}
</style><path class="trf8dyb2q"/>`,
		"fallback": "iconoven:arrow-up-to-line",
	});
}

export default Component;
