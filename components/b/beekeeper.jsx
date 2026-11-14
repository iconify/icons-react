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
		"content": `<style>.em3safb2e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 7.5V5c0-1.5 1.5-2 3.5-2s3.5.5 3.5 2v2.5M3 7.5h18m-12.5 0v3a3.5 3.5 0 0 0 7 0v-3m-11 14c0-2.75 3.25-4 7.5-4s7.5 1.25 7.5 4m-15-14l1 7.5m14-7.5l-1 7.5");
}
</style><path class="em3safb2e"/>`,
		"fallback": "uix-sharp:beekeeper",
	});
}

export default Component;
