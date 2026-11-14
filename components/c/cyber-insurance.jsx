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
		"content": `<style>.jry3d9gnm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.2 15.5H4.5v-11h15V12m-17 6.5h9.7m6.05-4l3.25 1.25V18c0 1.9-1.4 3.1-3.25 3.75C16.4 21.1 15 19.9 15 18v-2.25Z");
}
</style><path class="jry3d9gnm"/>`,
		"fallback": "uix-sharp:cyber-insurance",
	});
}

export default Component;
