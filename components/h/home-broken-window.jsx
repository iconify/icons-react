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
		"content": `<style>.n0gt-jbtw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h17v17h-17Zm8.5 0v17M3.5 12h17m-4-4.5l-2.5-4m2.5 4l4-1.5m-4 1.5l2 4.5m-2-4.5l-4.5 2");
}
</style><path class="n0gt-jbtw"/>`,
		"fallback": "uix-sharp:home-broken-window",
	});
}

export default Component;
