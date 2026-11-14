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
		"content": `<style>.izscxhbcf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.619 11l.381-.5h-5.5l1-8L4 12h5.5L8 21l4.953-6.5m.969-1.273l1.273-1.67M15.75 16h4.5M18 13.75v4.5m-2.25 3h4.5");
}
</style><path class="izscxhbcf"/>`,
		"fallback": "uix-sharp:flash-compensation",
	});
}

export default Component;
