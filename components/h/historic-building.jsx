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
		"content": `<style>.bmm_j9boi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 9l9-5.5L21 9Zm0 11.5h18M6 11v6.5m4-6.5v6.5m4-6.5v6.5m4-6.5v6.5M3 9h18");
}
</style><path class="bmm_j9boi"/>`,
		"fallback": "uix-sharp:historic-building",
	});
}

export default Component;
