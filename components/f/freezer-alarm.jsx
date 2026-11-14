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
		"content": `<style>.jbabb6u8o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5H20V8H2.5ZM15.2 19H3.5V8H19v3.7m-11-.2h5m5 3V18m0 3h.01");
}
</style><path class="jbabb6u8o"/>`,
		"fallback": "uix-sharp:freezer-alarm",
	});
}

export default Component;
