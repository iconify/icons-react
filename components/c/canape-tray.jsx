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
		"content": `<style>.cn18f6r-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19l-2 3.5h-15Zm.25 0a2.25 2.25 0 0 1 4.5 0m2.5 0a2.25 2.25 0 0 1 4.5 0m2.5 0a2.25 2.25 0 0 1 4.5 0M5 8h.01M12 8h.01M19 8h.01");
}
</style><path class="cn18f6r-g"/>`,
		"fallback": "uix-sharp:canape-tray",
	});
}

export default Component;
