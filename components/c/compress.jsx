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
		"content": `<style>.ibjlcbbft {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 12h16m-8-9v5.5m-3-3l3 3l3-3M12 21v-5.5m-3 3l3-3l3 3");
}
</style><path class="ibjlcbbft"/>`,
		"fallback": "uix-sharp:compress",
	});
}

export default Component;
