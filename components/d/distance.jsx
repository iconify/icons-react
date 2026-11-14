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
		"content": `<style>.qs_x83bnr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19v6h-19ZM6 13v2.25M9 13v2.25M12 13v3.25M15 13v2.25M18 13v2.25M3.5 6.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm14 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm-11 0h11");
}
</style><path class="qs_x83bnr"/>`,
		"fallback": "uix-sharp:distance",
	});
}

export default Component;
