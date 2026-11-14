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
		"content": `<style>.atmse5m2y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5h15M7 3.5v15M3 20a4 1.5 0 1 0 8 0a4 1.5 0 1 0-8 0ZM18.5 3.5v4m-2 0h4l1 5h-6Z");
}
</style><path class="atmse5m2y"/>`,
		"fallback": "uix-sharp:boom-arm",
	});
}

export default Component;
