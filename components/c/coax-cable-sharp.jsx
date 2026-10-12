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
		"content": `<style>.bf826ko3z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12h4m.75-4h5.25v2h3.5v4h-3.5v2h-6V8zm2.25 0v8m6.5-4h5v9.25");
}
</style><path class="bf826ko3z"/>`,
		"fallback": "iconoven:coax-cable-sharp",
	});
}

export default Component;
