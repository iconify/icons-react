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
		"content": `<style>.uhjrjt61e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 2.5h19M5 17l3-5l4 4l-5 3Zm1 1l-2.5 2.5M11 11l5.5-5.5l4 4m-2.75 0h2.75V6.75");
}
</style><path class="uhjrjt61e"/>`,
		"fallback": "uix-sharp:flash-bounce",
	});
}

export default Component;
