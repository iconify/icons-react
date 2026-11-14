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
		"content": `<style>.r5_2mo84e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.5 21.5l-2-5.5c-.5-1.5 1-2.5 2-1.5l1 1V10c0-1.25 1.25-2.25 2.5-2s2 1.25 2 2.5c0-1.25.75-2.25 2-2.5s2.5.75 2.5 2v5.5l1-1c1-1 2.5 0 2 1.5l-2 5.5m-5.5-11v11M5.5 4L7 5.5m5-3v3M18.5 4L17 5.5");
}
</style><path class="r5_2mo84e"/>`,
		"fallback": "uix-sharp:applause-sign",
	});
}

export default Component;
