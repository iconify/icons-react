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
		"content": `<style>.wftn9ylpk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7V6h-7Zm2 3.5h3v10.5l-1.5 4l-1.5-4Zm0 3l3 1.5m-3 2l3 1.5");
}
</style><path class="wftn9ylpk"/>`,
		"fallback": "uix-sharp:bone-screw",
	});
}

export default Component;
