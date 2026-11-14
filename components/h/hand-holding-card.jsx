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
		"content": `<style>.rd3_5-bgn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.258 5.194l12.716-2.703l1.768 8.315l-12.716 2.703ZM2.5 17h3l3 3.5h7l5-4.5c.75-.75 0-2-1-1.5l-3.75 3H11.5M4.882 8.129l12.716-2.703");
}
</style><path class="rd3_5-bgn"/>`,
		"fallback": "uix-sharp:hand-holding-card",
	});
}

export default Component;
