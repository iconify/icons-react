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
		"content": `<style>.rlnpp-ywq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.6 17.5H2.5v-11h.1m7.8 0h11.1v11h-.1M6 10.5v3m12-3v3M3.5 3.5l17 17");
}
</style><path class="rlnpp-ywq"/>`,
		"fallback": "uix-sharp:counterfeit",
	});
}

export default Component;
