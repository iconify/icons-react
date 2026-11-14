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
		"content": `<style>.cw7l_djbk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5h19v5h-19ZM4.5 4v11.5M19.5 4v11.5m-15-9h15m-15 3h15m-15 3h15");
}
</style><path class="cw7l_djbk"/>`,
		"fallback": "uix-sharp:boxing-gym",
	});
}

export default Component;
