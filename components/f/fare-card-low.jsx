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
		"content": `<style>.xl4gk7bvo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 18H2.5V3.5h19V18h-.7M2.5 8h19M6 13h3m9 1.5V18m0 3h.01");
}
</style><path class="xl4gk7bvo"/>`,
		"fallback": "uix-sharp:fare-card-low",
	});
}

export default Component;
