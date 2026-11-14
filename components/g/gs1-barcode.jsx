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
		"content": `<style>.zleyh3wvj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 5h17v14h-17ZM8 9v6m2.5-6v6M12 9v6m2.5-6v6M16 9v6m-9 1.5h10");
}
</style><path class="zleyh3wvj"/>`,
		"fallback": "uix-sharp:gs1-barcode",
	});
}

export default Component;
