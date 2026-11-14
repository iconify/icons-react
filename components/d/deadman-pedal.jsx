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
		"content": `<style>.l6v-64yfo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.67 10.492l10.625-2.847l1.035 3.863l-10.625 2.847ZM8.5 20.5L16 13M2.5 20.5h19M4.5 3v8.5M2.25 9.25L4.5 11.5l2.25-2.25");
}
</style><path class="l6v-64yfo"/>`,
		"fallback": "uix-sharp:deadman-pedal",
	});
}

export default Component;
