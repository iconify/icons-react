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
		"content": `<style>.juzks5bcv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21.5 20.5h-19q10 0 13-8v8M13.241 6.831l7.25-3.381l1.163 2.492l-7.251 3.381Z");
}
</style><path class="juzks5bcv"/>`,
		"fallback": "uix-sharp:big-air-ramp",
	});
}

export default Component;
