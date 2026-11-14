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
		"content": `<style>.s1ad90s3i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 18h18l-2.5-7h-13Zm2.5-7L8 6h8l2.5 5");
}
</style><path class="s1ad90s3i"/>`,
		"fallback": "uix-sharp:dore-bar",
	});
}

export default Component;
