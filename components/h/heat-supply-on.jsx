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
		"content": `<style>.tu1tjwbrg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 11h19v10h-19Zm6.25 0v10m6.5-10v10M7 8Q5.75 6.5 7 5.25T7 2.5M12 8q-1.25-1.5 0-2.75t0-2.75M17 8q-1.25-1.5 0-2.75t0-2.75");
}
</style><path class="tu1tjwbrg"/>`,
		"fallback": "uix-sharp:heat-supply-on",
	});
}

export default Component;
