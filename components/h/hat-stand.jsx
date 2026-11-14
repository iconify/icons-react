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
		"content": `<style>.bzdgd3bhp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8 8l.5-3.75c1-1.75 6-1.75 7 0L16 8M3 8h18c-1.5 2-16.5 2-18 0Zm9 1.5V19m-4.5 2.5L12 19l4.5 2.5M8 6.25h8");
}
</style><path class="bzdgd3bhp"/>`,
		"fallback": "uix-sharp:hat-stand",
	});
}

export default Component;
