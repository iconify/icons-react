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
		"content": `<style>.rdg_8ibpb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 13.5H3v-10h18v8.4m-11 1.6V21m7.5.5l-2.25-3a3 3 0 1 1 4.5 0Z");
}
</style><path class="rdg_8ibpb"/>`,
		"fallback": "uix-sharp:city-limits-sign",
	});
}

export default Component;
