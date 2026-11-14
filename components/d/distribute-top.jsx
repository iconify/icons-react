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
		"content": `<style>.l_o7xsbbk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19m-19 2.75H7v15.5H2.5Zm7.25 0h4.5v8h-4.5Zm7.25 0h4.5v12H17Z");
}
</style><path class="l_o7xsbbk"/>`,
		"fallback": "uix-sharp:distribute-top",
	});
}

export default Component;
