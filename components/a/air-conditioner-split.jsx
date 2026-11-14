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
		"content": `<style>.gnzfwkamo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4h16.5v10H5Zm0 7H4q-1.5 0-1.5 1.5V18M8 11h10.5M11 17l-.75 3m5.25-3l.75 3");
}
</style><path class="gnzfwkamo"/>`,
		"fallback": "uix-sharp:air-conditioner-split",
	});
}

export default Component;
