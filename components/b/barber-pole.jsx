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
		"content": `<style>.pcz18absq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3h9v2.75h-9ZM9 5.75h6v12.5H9Zm-1.5 12.5h9V21h-9ZM9 9.5l6-3m-6 7l6-3m-6 7l6-3");
}
</style><path class="pcz18absq"/>`,
		"fallback": "uix-sharp:barber-pole",
	});
}

export default Component;
