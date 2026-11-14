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
		"content": `<style>.u7rprrbry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 9v6m19-6v6M5.25 12h13.5M8 9.25L5.25 12L8 14.75m8-5.5L18.75 12L16 14.75");
}
</style><path class="u7rprrbry"/>`,
		"fallback": "uix-sharp:axis-x",
	});
}

export default Component;
