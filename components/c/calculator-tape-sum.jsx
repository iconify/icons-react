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
		"content": `<style>.qyuradb7c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 10h15v11.5h-15Zm3 0V2.5h9V10m-6.25-4h3.5m-5.5 8h.01M12 14h.01m3.74 0h.01m-7.51 4h.01M12 18h.01m3.74 0h.01");
}
</style><path class="qyuradb7c"/>`,
		"fallback": "uix-sharp:calculator-tape-sum",
	});
}

export default Component;
