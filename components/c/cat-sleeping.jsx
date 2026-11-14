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
		"content": `<style>.f5m8ru4tw {
  d: path("M4 17.5c-1-2.5-1-5-.5-6.5l.25-2.75L6 9.5h1l1.75-1.75L9 10c3-4.5 9-4.5 11-.5c1.5 3 .5 7-2.5 8Z");
}

.ju8kv6hcw {
  d: path("M18 14c-1.5 1-4.5 1-7 0m-5.5-1q1 1 2 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f5m8ru4tw"/><path class="ju8kv6hcw"/></g>`,
		"fallback": "uix-sharp:cat-sleeping",
	});
}

export default Component;
