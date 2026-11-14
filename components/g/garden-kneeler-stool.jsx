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
		"content": `<style>.udk4qshgk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19v4h-19Zm2 0V6.5a2 2 0 0 1 4 0V13m7 0V6.5a2 2 0 0 1 4 0V13M5 17l-1.5 4.5M19 17l1.5 4.5");
}
</style><path class="udk4qshgk"/>`,
		"fallback": "uix-sharp:garden-kneeler-stool",
	});
}

export default Component;
