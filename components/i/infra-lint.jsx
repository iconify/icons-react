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
		"content": `<style>.bu0ubjbwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h18v4H3Zm16.6 10.75H3v-4h18v2.6m-9.5 6.85V20H3v-4h8.5v1.3m3.25.7l2 2L21 15.75");
}
</style><path class="bu0ubjbwh"/>`,
		"fallback": "uix-sharp:infra-lint",
	});
}

export default Component;
