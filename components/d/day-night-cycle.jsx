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
		"content": `<style>.ui1bfccmi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 6a6 6 0 0 0 0 12Zm0 0a6 6 0 0 1 0 12a8 8 0 0 0 0-12ZM3 12h2.25m2.5-6.25l-1.5-1.5m1.5 14l-1.5 1.5");
}
</style><path class="ui1bfccmi"/>`,
		"fallback": "uix-sharp:day-night-cycle",
	});
}

export default Component;
