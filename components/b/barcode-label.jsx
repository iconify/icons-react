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
		"content": `<style>.xgw12_m0a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6h17v12h-17ZM8 9v6m2.5-6v6M12 9v6m2.5-6v6M16 9v6");
}
</style><path class="xgw12_m0a"/>`,
		"fallback": "uix-sharp:barcode-label",
	});
}

export default Component;
