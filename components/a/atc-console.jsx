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
		"content": `<style>.mu7ob3bgg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h8v7.5H3Zm10 0h8v7.5h-8ZM2.5 14h19L20 19.5H4ZM7 10.5V14m10-3.5V14");
}
</style><path class="mu7ob3bgg"/>`,
		"fallback": "uix-sharp:atc-console",
	});
}

export default Component;
