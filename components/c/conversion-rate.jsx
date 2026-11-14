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
		"content": `<style>.l6e553b0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h15L12 11v8.5l-4-2V11Zm12.25 17.75l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}
</style><path class="l6e553b0d"/>`,
		"fallback": "uix-sharp:conversion-rate",
	});
}

export default Component;
