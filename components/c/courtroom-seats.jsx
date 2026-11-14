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
		"content": `<style>.jory-fbot {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12.5V5.75a2.25 2.25 0 0 1 4.5 0v6.75m2.75 0V5.75a2.25 2.25 0 0 1 4.5 0v6.75m2.75 0V5.75a2.25 2.25 0 0 1 4.5 0v6.75M2.5 16h19M5 16v4.5M19 16v4.5");
}
</style><path class="jory-fbot"/>`,
		"fallback": "uix-sharp:courtroom-seats",
	});
}

export default Component;
