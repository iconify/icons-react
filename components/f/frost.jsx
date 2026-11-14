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
		"content": `<style>.g2qzly40i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19m8.227-14.25l-16.454 9.5m16.454 0L3.773 7.25M9.75 4L12 6.25L14.25 4m3.553 2.051l-.823 3.074l3.073.824m0 4.102l-3.073.824l.823 3.074M14.25 20L12 17.75L9.75 20m-3.553-2.051l.823-3.074l-3.073-.824m0-4.102l3.073-.824l-.823-3.074");
}
</style><path class="g2qzly40i"/>`,
		"fallback": "uix:frost",
	});
}

export default Component;
