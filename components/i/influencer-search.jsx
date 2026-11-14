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
		"content": `<style>.kr5233b4x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm8.673 13H2.5v-1c0-3 2.75-5 6.25-5c1.578 0 3.003.406 4.093 1.128M15.25 17.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}
</style><path class="kr5233b4x"/>`,
		"fallback": "uix-sharp:influencer-search",
	});
}

export default Component;
