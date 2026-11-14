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
		"content": `<style>.cc74-z4xm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 17.5h-10l6-14l3.5 7L14.5 7l1.906 2.621M18 12.75l4 8.75h-8Zm0 4V19");
}
</style><path class="cc74-z4xm"/>`,
		"fallback": "uix-sharp:avalanche-risk-scale",
	});
}

export default Component;
