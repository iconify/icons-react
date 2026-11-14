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
		"content": `<style>.rd4s7ybok {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.1 19.5H4v-17h14.5v9.4m-4-4.4v4M7.5 6h3m7.5 8.75v6.5m-2.75-4.75l5.5 3m-5.5 0l5.5-3");
}
</style><path class="rd4s7ybok"/>`,
		"fallback": "uix-sharp:grocery-locker-chilled",
	});
}

export default Component;
