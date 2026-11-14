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
		"content": `<style>.tzt5facyh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 15l4-5l3 2.5l6-9m-1.5 9h7.5v9H14Zm0 3h7.5m-7.5 3h7.5");
}
</style><path class="tzt5facyh"/>`,
		"fallback": "uix-sharp:analytics-lifetime",
	});
}

export default Component;
