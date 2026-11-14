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
		"content": `<style>.r7hg2jwkz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 18.5H2.5v-13h17v6.2m-14-6.2v-2h3v2m5 0v-2h3v2M6 15.5h4.5m7.5-1V18m0 3h.01");
}
</style><path class="r7hg2jwkz"/>`,
		"fallback": "uix-sharp:car-battery-low",
	});
}

export default Component;
