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
		"content": `<style>.fxvx63fwv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 8.5l9-5l9 5Zm0 12h18m-15.75-9h2.5m-1.25 0v6m4.25-6h2.5m-1.25 0v6m4.25-6h2.5m-1.25 0v6");
}
</style><path class="fxvx63fwv"/>`,
		"fallback": "uix-sharp:classical-portico",
	});
}

export default Component;
