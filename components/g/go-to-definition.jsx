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
		"content": `<style>.izsyv071h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h6m-3-3l3 3l-3 3m6-11h10m-10 5h10v6h-10Zm2.75 3h4.5m-7.25 8h6");
}
</style><path class="izsyv071h"/>`,
		"fallback": "uix-sharp:go-to-definition",
	});
}

export default Component;
