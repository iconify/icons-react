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
		"content": `<style>.zfkym72dm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.1 15H2.5V9h1.2m16.6 0h1.2v6h-2.6M12 18.5c-3-2.5-5.5-4.75-5.5-8a3 3 0 0 1 5.5-2a3 3 0 0 1 5.5 2c0 3.25-2.5 5.5-5.5 8Z");
}
</style><path class="zfkym72dm"/>`,
		"fallback": "uix-sharp:heart-rate-strap",
	});
}

export default Component;
