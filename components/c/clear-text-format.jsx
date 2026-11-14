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
		"content": `<style>.ftahkub3a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h11.5M8.75 4v10.5m4.404 3.164l6.01-6.01l3.182 3.182l-6.01 6.01Zm2.225.086h4.242");
}
</style><path class="ftahkub3a"/>`,
		"fallback": "uix-sharp:clear-text-format",
	});
}

export default Component;
