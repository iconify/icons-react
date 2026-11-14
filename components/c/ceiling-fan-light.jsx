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
		"content": `<style>.wjgzpjbej {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 4.5h5m-2.5 0v6m-2.5 0h5v3h-5Zm-7 1.5h7m5 0h7M12 13.5V16m-4 0h8a4 4 0 0 1-8 0Z");
}
</style><path class="wjgzpjbej"/>`,
		"fallback": "uix-sharp:ceiling-fan-light",
	});
}

export default Component;
