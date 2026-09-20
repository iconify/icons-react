import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gz-fhv1rk {
  fill: currentColor;
  d: path("M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1m0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2m-.611 1.429c.19-.571 1.031-.571 1.222 0l.032.13c.183 1.334.378 2.666.54 4.003c.037.308.067.577.067.689a1.25 1.25 0 0 1-2.5 0c0-.112.03-.38.067-.69c.12-.986.377-2.838.54-4.001z");
}
</style><path class="gz-fhv1rk"/>`,
		"fallback": "fluent:gauge-rotate-0-16-regular",
	});
}

export default Component;
