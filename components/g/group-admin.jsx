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
		"content": `<style>.k3v4lrtmi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 7.5V3l2.5 2.25L12 2.5l2.5 2.75L17 3v4.5ZM5 13a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm9 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM3 21.5c0-2 2-3.25 4.5-3.25S12 19.5 12 21.5m0 0c0-2 2-3.25 4.5-3.25S21 19.5 21 21.5");
}
</style><path class="k3v4lrtmi"/>`,
		"fallback": "uix-sharp:group-admin",
	});
}

export default Component;
