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
		"content": `<style>.lto0c943t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.5h9v19h-9Zm0 4.75h9M7.5 12h9m-9 4.75h9");
}
</style><path class="lto0c943t"/>`,
		"fallback": "uix-sharp:colour-shades",
	});
}

export default Component;
