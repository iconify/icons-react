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
		"content": `<style>.qcv56bcle {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.641 8.53L8.53 4.641a1.75 1.75 0 0 1 2.475 0l.354.354a1.75 1.75 0 0 1 0 2.475L7.47 11.359a1.75 1.75 0 0 1-2.475 0l-.354-.354a1.75 1.75 0 0 1 0-2.475M9.5 9.5l5 5m-8.75 3h12.5A1.75 1.75 0 0 1 20 19.25A1.75 1.75 0 0 1 18.25 21H5.75A1.75 1.75 0 0 1 4 19.25a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="qcv56bcle"/>`,
		"fallback": "uix:court-trial",
	});
}

export default Component;
