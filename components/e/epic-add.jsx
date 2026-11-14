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
		"content": `<style>.zysghdcmw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.898 15.241L17 10h-6.5L12 2.5l-9 11h6.5l-1.5 8l4.22-5.393M18 15v6m-3-3h6");
}
</style><path class="zysghdcmw"/>`,
		"fallback": "uix-sharp:epic-add",
	});
}

export default Component;
