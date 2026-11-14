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
		"content": `<style>.b7o6_-bdu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8h12v12h-12ZM17 4h4.5v16H17ZM2.5 11.5h12");
}
</style><path class="b7o6_-bdu"/>`,
		"fallback": "uix-sharp:food-storage-box",
	});
}

export default Component;
