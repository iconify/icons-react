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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y_82fhbja {
  d: path("M12.064 18.938L10.5 18L8 19.5L5.75 18L3.5 19.5v-17h14V12M7 7h7m-7 4h4m3.75 7a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="y_82fhbja"/><path class="a6k62accz"/></g>`,
		"fallback": "uix-sharp:days-payable-outstanding",
	});
}

export default Component;
