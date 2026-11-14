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
		"content": `<style>.pj170zbdg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 2.5h14v19H5Zm-2.5 19h19M9.75 2.5v19m4.5-19v19M5 7.25h14M5 12h14M5 16.75h14");
}
</style><path class="pj170zbdg"/>`,
		"fallback": "uix-sharp:bank-building-modern",
	});
}

export default Component;
