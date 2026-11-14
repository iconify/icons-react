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
		"content": `<style>.s_197dbhj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 21L8 6.5L12 3l4 3.5l.5 14.5ZM3 21h18m-9-11v6.5");
}
</style><path class="s_197dbhj"/>`,
		"fallback": "uix-sharp:boundary-stone",
	});
}

export default Component;
