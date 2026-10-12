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
		"content": `<style>.wafs16b6z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 18V8a5 5 0 0 1 10 0v10Zm-4.25-5.5h18.5M4 12.5V18m6-5.5V18m4-5.5V18m6-5.5V18M2.75 18h18.5v3.25H2.75z");
}
</style><path class="wafs16b6z"/>`,
		"fallback": "iconoven:balcony-sharp",
	});
}

export default Component;
