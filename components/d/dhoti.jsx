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
		"content": `<style>.cw4b3abla {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5h12v3H6Zm1 3L3 21l4.25-1.5L12 21l4.75-1.5L21 21L17 5.5m-7 0l-2.75 14M14 5.5l2.75 14");
}
</style><path class="cw4b3abla"/>`,
		"fallback": "uix-sharp:dhoti",
	});
}

export default Component;
