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
		"content": `<style>.xx_klccox {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 10.25h11.5v11H6.25zm3.5 0l.75-3.5l1.5-4l1.5 4l.75 3.5Zm-.5 5h5.5");
}
</style><path class="xx_klccox"/>`,
		"fallback": "iconoven:glue-sharp",
	});
}

export default Component;
