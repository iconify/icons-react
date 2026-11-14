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
		"content": `<style>.hgwz30btp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 11c0-4.5 3-7.5 7-7.5s7 3 7 7.5Zm4.5 5h5v5h-5Zm-4-5l4 5m9-5l-4 5");
}
</style><path class="hgwz30btp"/>`,
		"fallback": "uix-sharp:cargo-airdrop",
	});
}

export default Component;
