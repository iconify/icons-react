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
		"content": `<style>.z1mm6i9gw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12c0-3.5 3-5 6-5s4.5 2.5 5 5c-.5 2.5-2 5-5 5s-6-1.5-6-5Zm11 0l6.5-6.5c1.5 3 1.5 10 0 13Zm-7.5-1h.01");
}
</style><path class="z1mm6i9gw"/>`,
		"fallback": "uix-sharp:guppy",
	});
}

export default Component;
