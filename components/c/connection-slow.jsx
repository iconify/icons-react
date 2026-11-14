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
		"content": `<style>.issm0ob3m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm15 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-8 0h.01M12 12h.01M15 12h.01");
}
</style><path class="issm0ob3m"/>`,
		"fallback": "uix-sharp:connection-slow",
	});
}

export default Component;
