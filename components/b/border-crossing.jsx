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
		"content": `<style>.x9oqp0dfu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.826 10.734l12.99-7.5l1.75 3.032l-12.99 7.5Zm5.196-3l1.75 3.032m2.147-5.282l1.75 3.032M6 15.75V21m-3 0h8");
}
</style><path class="x9oqp0dfu"/>`,
		"fallback": "uix-sharp:border-crossing",
	});
}

export default Component;
