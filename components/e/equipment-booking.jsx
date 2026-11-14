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
		"content": `<style>.cvnk93_jn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h4v9H3Zm14 0h4v9h-4ZM7 7h10m-2 8.5h6v5.75h-6Zm0 2.25h6m-4.25-3.25V16m2.5-1.5V16");
}
</style><path class="cvnk93_jn"/>`,
		"fallback": "uix-sharp:equipment-booking",
	});
}

export default Component;
