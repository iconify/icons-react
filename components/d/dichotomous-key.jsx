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
		"content": `<style>.vc5avebtu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5L16.5 7L12 11.5L7.5 7Zm0 9v3M5 18v-3.5h14V18M5 21h.01M19 21h.01");
}
</style><path class="vc5avebtu"/>`,
		"fallback": "uix-sharp:dichotomous-key",
	});
}

export default Component;
