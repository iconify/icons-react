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
		"content": `<style>.tzt13ueql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5V10H9v10.5m0 0v-16h6v16m0 0V12h5.5v8.5m-18 0h19");
}
</style><path class="tzt13ueql"/>`,
		"fallback": "uix-sharp:downtown",
	});
}

export default Component;
