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
		"content": `<style>.d_0zyobxa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5v13c0 2-1 3.5-1 5.5h13.5a2 2 0 0 0 0-4L14 16c-1-.5-2-1.5-2-3V2.5m-7.5 7l9 2m-9.5 2L14.5 16");
}
</style><path class="d_0zyobxa"/>`,
		"fallback": "uix-sharp:ankle-support-wrap",
	});
}

export default Component;
