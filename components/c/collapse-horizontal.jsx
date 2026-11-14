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
		"content": `<style>.qi8prjons {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 4v16M5 8.5L8.5 12L5 15.5m14-7L15.5 12l3.5 3.5");
}
</style><path class="qi8prjons"/>`,
		"fallback": "uix-sharp:collapse-horizontal",
	});
}

export default Component;
