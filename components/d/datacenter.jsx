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
		"content": `<style>.oq37bjbry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h8v19h-8Zm11 0h8v19h-8ZM5.25 7h2.5m-2.5 4h2.5m8.5-4h2.5m-2.5 4h2.5");
}
</style><path class="oq37bjbry"/>`,
		"fallback": "uix-sharp:datacenter",
	});
}

export default Component;
