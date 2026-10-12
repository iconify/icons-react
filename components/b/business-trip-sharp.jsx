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
		"content": `<style>.xikokabpr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 11h12.5v10.25H2.75zM7 11V8.25h4V11m-8.25 4.5h12.5m3-12.75v7m-3-2.75l3-1.5l3 1.5M17 9.75h2.5");
}
</style><path class="xikokabpr"/>`,
		"fallback": "iconoven:business-trip-sharp",
	});
}

export default Component;
