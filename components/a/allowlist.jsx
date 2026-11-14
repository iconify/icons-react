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
		"content": `<style>.z8i7j2b9d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6.5L5 8l2.75-3M11 6.5h9.5m-17 6L5 14l2.75-3M11 12.5h9.5m-17 6L5 20l2.75-3M11 18.5h9.5");
}
</style><path class="z8i7j2b9d"/>`,
		"fallback": "uix-sharp:allowlist",
	});
}

export default Component;
