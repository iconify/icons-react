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
		"content": `<style>.gp9haubdd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3v16.5A1.5 1.5 0 0 0 9.5 21h5a1.5 1.5 0 0 0 1.5-1.5V3M6.5 3h11M8 10h8M2.5 15h19m-2-2l2 2l-2 2");
}
</style><path class="gp9haubdd"/>`,
		"fallback": "uix-sharp:cuvette",
	});
}

export default Component;
