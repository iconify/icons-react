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
		"content": `<style>.mfzrcfv7c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.7 16.5H2.5v-13h17v8.2M6 7.5h5.5m6.5 7v7M14.5 18h7");
}
</style><path class="mfzrcfv7c"/>`,
		"fallback": "uix-sharp:card-plus",
	});
}

export default Component;
