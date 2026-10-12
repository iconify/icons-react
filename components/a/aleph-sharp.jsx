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
		"content": `<style>.ewmc-4rmh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.75 4.25l12.5 15.5M17 4.25v5.306L13.75 11M7 19.75v-5.306L10.25 13");
}
</style><path class="ewmc-4rmh"/>`,
		"fallback": "iconoven:aleph-sharp",
	});
}

export default Component;
