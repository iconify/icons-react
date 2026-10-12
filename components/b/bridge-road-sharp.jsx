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
		"content": `<style>.v6mmmtb2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 9.25h18.5v2.5H2.75zM5 18a9 9 0 0 1 14 0M5 11.75V18m14-6.25V18M9 11.75v3.4m3-3.4v2.9m3-2.9v3.4M7.5 20.5l1-1l1 1l1 1l1-1m1 0l1-1l1 1l1 1l1-1");
}
</style><path class="v6mmmtb2m"/>`,
		"fallback": "iconoven:bridge-road-sharp",
	});
}

export default Component;
