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
		"content": `<style>.fvoqicofk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 7v2m-1.75-4.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM12 9L6.5 21M12 9l5.5 12m-8.75-5h6.5");
}
</style><path class="fvoqicofk"/>`,
		"fallback": "uix-sharp:drawing-compass",
	});
}

export default Component;
