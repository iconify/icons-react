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
		"content": `<style>.itkemubvh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4.5v15m3-15v15m3-15v15m3-15V12m1.5 4.5h8v4h-8Zm1.75 0v-2.75h4.5v2.75m-4.5 2h4.5");
}
</style><path class="itkemubvh"/>`,
		"fallback": "uix-sharp:barcode-print",
	});
}

export default Component;
