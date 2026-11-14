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
		"content": `<style>.yqx42tbdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6h19v12h-19ZM6 12h5.5m3.75-1.75l3.5 3.5m0-3.5l-3.5 3.5");
}
</style><path class="yqx42tbdl"/>`,
		"fallback": "uix-sharp:input-field-clear",
	});
}

export default Component;
