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
		"content": `<style>.y0ko0p8sm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19M4 3v18.5M20 3v18.5m-13-7h10v7H7Zm2.25 0v7m5.5-7v7M12 3v11.5");
}
</style><path class="y0ko0p8sm"/>`,
		"fallback": "uix-sharp:freight-yard",
	});
}

export default Component;
