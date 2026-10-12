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
		"content": `<style>.ljfd03bbh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 13.25h4v7.5h-4zm6.75-4h4v11.5h-4zm6.75 2.5h4v9h-4zm-14-6.5h2.5m2.85 0h2.5m2.8 0h2.5m2.85 0h2.5");
}
</style><path class="ljfd03bbh"/>`,
		"fallback": "iconoven:benchmark-bar-sharp",
	});
}

export default Component;
