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
		"content": `<style>.psdmb8xlt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.1 20.5H3.5v-18h12v10.6M8 5.5h3m10.75 16.25h-4.5L14 18.5l4.5-4.5l3.25 3.25Zm-2.5-2.5h.01");
}
</style><path class="psdmb8xlt"/>`,
		"fallback": "uix-sharp:ad-mobile",
	});
}

export default Component;
