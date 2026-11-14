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
		"content": `<style>.nnw1vobhd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5L8 3m8 18.5L13 3m8.5 18.5L16.5 3m-7 16l.25-4m.25-4l.25-4");
}
</style><path class="nnw1vobhd"/>`,
		"fallback": "uix-sharp:hard-shoulder",
	});
}

export default Component;
