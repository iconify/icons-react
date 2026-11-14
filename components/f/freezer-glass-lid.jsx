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
		"content": `<style>.mt0tvebld {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4.5h14L21.5 9h-19Zm6.5 14h-9V9h19v3.9m-14-.4h5m5.5 2.25v6.5m-2.75-4.75l5.5 3m-5.5 0l5.5-3");
}
</style><path class="mt0tvebld"/>`,
		"fallback": "uix-sharp:freezer-glass-lid",
	});
}

export default Component;
