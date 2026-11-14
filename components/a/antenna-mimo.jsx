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
		"content": `<style>.ipwb7i5cl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 18h15v3.5h-15ZM7 2.5V18m5-15.5V18m5-15.5V18");
}
</style><path class="ipwb7i5cl"/>`,
		"fallback": "uix-sharp:antenna-mimo",
	});
}

export default Component;
