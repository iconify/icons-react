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
		"content": `<style>.qg8wbbbcp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 2.5h15v19h-15ZM3.5 8h4m-4 8h4m3.5 1v-3.5m3 3.5v-6.5m3 6.5V7.5");
}
</style><path class="qg8wbbbcp"/>`,
		"fallback": "uix-sharp:business-plan-book",
	});
}

export default Component;
