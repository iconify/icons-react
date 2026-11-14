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
		"content": `<style>.aeakvrbns {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2h5v3h-5Zm.5 3L4 22M14 5l6 17M8.25 10l10 7m-2.5-7l-10 7M2 22h20");
}
</style><path class="aeakvrbns"/>`,
		"fallback": "uix-sharp:derrick",
	});
}

export default Component;
