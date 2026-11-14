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
		"content": `<style>.m-un6krdy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 9L12 4l8.5 5Zm3 2.5v6m5.5-6v6m5.5-6v6m-14 3h17");
}
</style><path class="m-un6krdy"/>`,
		"fallback": "uix-sharp:ai-governance",
	});
}

export default Component;
