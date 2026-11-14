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
		"content": `<style>.pb216zb3f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20 17.5H4m3 3l-3-3l3-3m13-8H4m3 3l-3-3l3-3");
}
</style><path class="pb216zb3f"/>`,
		"fallback": "uix-sharp:arrows-left-pair",
	});
}

export default Component;
