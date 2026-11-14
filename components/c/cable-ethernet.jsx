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
		"content": `<style>.acz0nvs4u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 3h10v8h-2.5v2.5h-5V11H7Zm2.75 0v2.5M12 3v2.5M14.25 3v2.5m-2.25 8v8");
}
</style><path class="acz0nvs4u"/>`,
		"fallback": "uix-sharp:cable-ethernet",
	});
}

export default Component;
