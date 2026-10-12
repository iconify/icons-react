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
		"content": `<style>.omht9xbdt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 20.25V7.85l.74-.67l3.65-3.26l.74-.67l.74.67l3.64 3.26l.74.67v13.4H2.75zM16 20.5V11l.71.24l3.83 1.27l.71.24v8.5H16zm2.63-5.25v3.5M16.88 17h3.5");
}
</style><path class="omht9xbdt"/>`,
		"fallback": "iconoven:extension-house-sharp",
	});
}

export default Component;
