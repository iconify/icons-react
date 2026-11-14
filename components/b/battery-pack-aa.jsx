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
		"content": `<style>.tu9fc_-st {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.5h6V21h-6Zm9 0h6V21h-6Zm-6-2v2m9-2v2m-14 8.25h19");
}
</style><path class="tu9fc_-st"/>`,
		"fallback": "uix-sharp:battery-pack-aa",
	});
}

export default Component;
