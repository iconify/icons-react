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
		"content": `<style>.li70erbzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m18.718 5.282l-.354 3.182L12 14.828L9.172 12l6.364-6.364ZM8.111 10.939l4.95 4.95m-3.713-3.712l2.475 2.475l-5.303 5.303l-2.475-2.475Zm6.895-4.42l-3.889 3.889");
}
</style><path class="li70erbzz"/>`,
		"fallback": "uix-sharp:dive-knife",
	});
}

export default Component;
