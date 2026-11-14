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
		"content": `<style>.y6yi-4zpg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5V4m19 0v17.5M2.5 11h19m-19 8h19M5.75 6.5h4.5V11h-4.5Zm8 0h4.5V11h-4.5ZM8 14h8v5H8Zm4 2.5h.01");
}
</style><path class="y6yi-4zpg"/>`,
		"fallback": "uix-sharp:bin-location",
	});
}

export default Component;
