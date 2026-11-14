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
		"content": `<style>.tdk86zhwm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 8h14l2 12.5H3Zm3.5 0a3.5 3.5 0 0 1 7 0M12 11.5V17m-2.75-2.75h5.5");
}
</style><path class="tdk86zhwm"/>`,
		"fallback": "uix-sharp:first-aid-bag",
	});
}

export default Component;
