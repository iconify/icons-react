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
		"content": `<style>.si8ru8bkc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19M4 13v8.5h16V13M11 3h9v6.5h-9Zm4.5 6.5V13");
}
</style><path class="si8ru8bkc"/>`,
		"fallback": "uix-sharp:airport-check-in-desk",
	});
}

export default Component;
