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
		"content": `<style>.i8sx5c1bn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19v13.5h-19Zm0 10h19m-11 3.5l-1 4m4-4l1 4m-8 0h11");
}
</style><path class="i8sx5c1bn"/>`,
		"fallback": "uix-sharp:all-in-one",
	});
}

export default Component;
