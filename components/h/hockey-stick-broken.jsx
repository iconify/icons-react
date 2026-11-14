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
		"content": `<style>.l2-la5bfl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.5 2.5L15 10m-1.5 3L11 18.75c-.4.75-1 1.25-2 1.25H4m13.5-7l2.5 1m-9-4.5l-2-1");
}
</style><path class="l2-la5bfl"/>`,
		"fallback": "uix-sharp:hockey-stick-broken",
	});
}

export default Component;
