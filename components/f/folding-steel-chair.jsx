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
		"content": `<style>.baizn14rc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.5 2.5l1 9.5h10m-10 0l9 9.5m1-9.5l-10 9.5M7 7h2.75");
}
</style><path class="baizn14rc"/>`,
		"fallback": "uix-sharp:folding-steel-chair",
	});
}

export default Component;
