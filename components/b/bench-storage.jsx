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
		"content": `<style>.mviye2b-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18v7H3Zm.5-2.5l10.5-6M5.5 18v3m13-3v3");
}
</style><path class="mviye2b-k"/>`,
		"fallback": "uix-sharp:bench-storage",
	});
}

export default Component;
