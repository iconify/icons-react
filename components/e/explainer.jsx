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
		"content": `<style>.vo89fsb-i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h18v12.5H3Zm9 12.5V18m-4 3.5l4-3.5l4 3.5m-9-14h8M7 11h4.5");
}
</style><path class="vo89fsb-i"/>`,
		"fallback": "uix-sharp:explainer",
	});
}

export default Component;
