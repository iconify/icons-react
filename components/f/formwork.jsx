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
		"content": `<style>.x91gzgbtl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 4h3v13.5h-3Zm10 0h3v13.5h-3Zm-13 13.5h19V21h-19ZM3 8h18");
}
</style><path class="x91gzgbtl"/>`,
		"fallback": "uix-sharp:formwork",
	});
}

export default Component;
