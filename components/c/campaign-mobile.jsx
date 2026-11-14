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
		"content": `<style>.j70m4jppf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.7 21H3V2.5h12v10.7M7.5 5.5h3m4 10.5h1.75l5.25-2.5v8L16.25 19H14.5Zm1.75 3l.75 2.5");
}
</style><path class="j70m4jppf"/>`,
		"fallback": "uix-sharp:campaign-mobile",
	});
}

export default Component;
