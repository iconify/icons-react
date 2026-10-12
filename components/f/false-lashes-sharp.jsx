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
		"content": `<style>.t711vsihu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5 15.6l-2.25-5.1m5.5 6.4L7 10m5 7.4v-7.15m3.75 6.65L17 10m2 5.6l2.25-5.1M3 14.5c5 4 13 4 18 0");
}
</style><path class="t711vsihu"/>`,
		"fallback": "iconoven:false-lashes-sharp",
	});
}

export default Component;
