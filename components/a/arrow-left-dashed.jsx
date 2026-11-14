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
		"content": `<style>.udaiv7w6g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M19.5 12h.01m-4.01 0h.01m-4.01 0H4m6.25 6.25L4 12l6.25-6.25");
}
</style><path class="udaiv7w6g"/>`,
		"fallback": "uix-sharp:arrow-left-dashed",
	});
}

export default Component;
