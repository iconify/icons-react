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
		"content": `<style>.h0p55620y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12h7.5v7.5h-7.5zm3.75 0v3m2-3V9m0-5.5h6l-.6.8l-1.4 1.95l1.4 1.95l.6.8h-6Zm4.75 16h2.25m3 0h2.25");
}
</style><path class="h0p55620y"/>`,
		"fallback": "iconoven:first-mile-sharp",
	});
}

export default Component;
