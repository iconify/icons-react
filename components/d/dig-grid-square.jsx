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
		"content": `<style>.hso2fl2ac {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.4 17.5H2.5v-15h15v10.2M7.5 2.5v15m5-15v15m-10-10h15m-15 5h15m-1 3h3m-1.5 0v2m-1.75 0h3.5V20L18 22l-1.75-2Z");
}
</style><path class="hso2fl2ac"/>`,
		"fallback": "uix-sharp:dig-grid-square",
	});
}

export default Component;
