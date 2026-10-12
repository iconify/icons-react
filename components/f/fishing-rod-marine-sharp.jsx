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
		"content": `<style>.l__33acxq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.46 19.8l1.08.9l.38.32l.32-.38l2.57-3.07l.32-.38l-.38-.32l-1.08-.9l-.38-.32l-.32.38L3.4 19.1l-.32.38zm3.75-3.38L18 3.5m0 0c1.75 2.5 2.5 6 2.5 10.5v4H17v-2.5");
}
</style><path class="l__33acxq"/>`,
		"fallback": "iconoven:fishing-rod-marine-sharp",
	});
}

export default Component;
