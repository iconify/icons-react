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
		"content": `<style>.to4rhfzdj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19m-18 0h4l-2 15ZM10 3h4l-2 18Zm6.5 0h4l-2 13Z");
}
</style><path class="to4rhfzdj"/>`,
		"fallback": "uix-sharp:frozen-waterfall",
	});
}

export default Component;
