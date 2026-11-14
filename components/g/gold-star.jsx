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
		"content": `<style>.dsm2cptdn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11 5l2.204 4.966l5.404.562l-4.042 3.631l1.136 5.313L11 16.75l-4.702 2.722l1.136-5.313l-4.042-3.631l5.404-.562Zm8.5-2.5V6m-1.75-1.75h3.5");
}
</style><path class="dsm2cptdn"/>`,
		"fallback": "uix-sharp:gold-star",
	});
}

export default Component;
