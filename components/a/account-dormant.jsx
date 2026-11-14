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
		"content": `<style>.or7-brb-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.8 21.5H4.5v-19h15v7.4m-11-7.4v19m3-14.5h4m-.75 10H18l-3.25 4H18m1.5-8.25h1.75L19.5 14.5h1.75");
}
</style><path class="or7-brb-z"/>`,
		"fallback": "uix-sharp:account-dormant",
	});
}

export default Component;
