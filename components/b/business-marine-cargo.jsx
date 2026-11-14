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
		"content": `<style>.t7-u9dbpu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h19L19 16.5H5ZM6 8h5.5v4H6Zm5.5 0H17v4h-5.5ZM8.75 4h5.5v4h-5.5ZM3 20q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="t7-u9dbpu"/>`,
		"fallback": "uix-sharp:business-marine-cargo",
	});
}

export default Component;
