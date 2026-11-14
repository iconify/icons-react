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
		"content": `<style>.rcbv6c8ew {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 18V9a6 6 0 0 1 12 0v9M3.5 18h17v3.5h-17ZM12 6.5V15M9 9.5h6");
}
</style><path class="rcbv6c8ew"/>`,
		"fallback": "uix-sharp:gravestone-cross",
	});
}

export default Component;
