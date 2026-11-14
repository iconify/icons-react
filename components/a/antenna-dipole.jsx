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
		"content": `<style>.vki11rbfa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5H10V8H2.5Zm11.5 0h7.5V8H14ZM8.5 8l3.5 4l3.5-4M12 12v8.5");
}
</style><path class="vki11rbfa"/>`,
		"fallback": "uix-sharp:antenna-dipole",
	});
}

export default Component;
