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
		"content": `<style>.i_4qc5pts {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 4.5l4 4m0-4l-4 4m7.5-2h9.5m-17 4l4 4m0-4l-4 4m7.5-2h9.5m-17 4l4 4m0-4l-4 4m7.5-2h9.5");
}
</style><path class="i_4qc5pts"/>`,
		"fallback": "uix-sharp:blocklist",
	});
}

export default Component;
