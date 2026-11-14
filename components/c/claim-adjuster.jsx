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
		"content": `<style>.gpwj5lbuj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 5.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM3.5 21.5v-2c0-3 1.75-4.75 4-5.5m13 7.5v-2c0-3-1.75-4.75-4-5.5m-9-2h9v9.5h-9Zm2.5 0v-1.25h4V12m-3.75 4.75h3.5");
}
</style><path class="gpwj5lbuj"/>`,
		"fallback": "uix-sharp:claim-adjuster",
	});
}

export default Component;
