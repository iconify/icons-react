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
		"content": `<style>.zz465rbts {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 12.5h7v9h-7Zm3.5-10C10 5 9.5 6 9.5 7a2.5 2.5 0 0 0 5 0c0-1-.5-2-2.5-4.5Z");
}
</style><path class="zz465rbts"/>`,
		"fallback": "uix-sharp:candle-calm",
	});
}

export default Component;
