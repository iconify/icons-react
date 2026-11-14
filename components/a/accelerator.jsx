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
		"content": `<style>.euy9e1x1l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 19.25a9 9 0 1 1 12.5 0M12 13l5-5m-5 5h.01");
}
</style><path class="euy9e1x1l"/>`,
		"fallback": "uix-sharp:accelerator",
	});
}

export default Component;
