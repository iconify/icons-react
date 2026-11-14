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
		"content": `<style>.pbzvr-3ae {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 12l4.75-8.25m0 0h9.5m0 0L21.5 12m0 0l-4.75 8.25m0 0h-9.5m0 0L2.5 12");
}
</style><path class="pbzvr-3ae"/>`,
		"fallback": "uix-sharp:hexagon-ring",
	});
}

export default Component;
