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
		"content": `<style>.uedo_cc7u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75v2.5m0 3v2.5m0 8.5v2M3.25 15h17M17 11.75L20.25 15L17 18.25");
}
</style><path class="uedo_cc7u"/>`,
		"fallback": "iconoven:border-crossing-sharp",
	});
}

export default Component;
