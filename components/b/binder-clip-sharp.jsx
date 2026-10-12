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
		"content": `<style>.of-nkrb7x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 11.25H18l.35 1.46l1.55 6.58l.35 1.46H3.75l.35-1.46l1.55-6.58l.35-1.46zM5.5 16h13m-10-4.75L6 3.5m9.5 7.75L18 3.5");
}
</style><path class="of-nkrb7x"/>`,
		"fallback": "iconoven:binder-clip-sharp",
	});
}

export default Component;
