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
		"content": `<style>.r1-4nwbqj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21h19M14.25 3L9 11.5h6l-4.5 6.75m-7-.25a9 9 0 0 1 3.25-4.5m10.5 0A9 9 0 0 1 20.5 18");
}
</style><path class="r1-4nwbqj"/>`,
		"fallback": "uix-sharp:heat-lightning",
	});
}

export default Component;
