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
		"content": `<style>.nou0xfyph {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.9 5h12.6v12.6M15.1 19H2.5V6.4m0 3.1h3.1m7.8 0h8.1M6 15h3M3.5 3.5l17 17");
}
</style><path class="nou0xfyph"/>`,
		"fallback": "uix-sharp:credit-card-off",
	});
}

export default Component;
