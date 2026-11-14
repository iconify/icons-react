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
		"content": `<style>.y_-b8-0ku {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 15.5c-2.5 0-4.25-1.75-4.25-4c0-2.5 2.25-4 3.25-8q2.25 2.25 2.25 4.5c.75-.5 1.25-1.25 1.5-2c1 1.25 1.5 3.5 1.5 5.5c0 2.25-1.75 4-4.25 4Zm-8 1l16 4m-16 0l16-4");
}
</style><path class="y_-b8-0ku"/>`,
		"fallback": "uix-sharp:campfire-logs",
	});
}

export default Component;
