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
		"content": `<style>.gnj-4pblo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 6c1-1 3.5-1 4.5 0l-1 6.5c3 2 2.5 9-5 9c-6.5 0-7-6.5-4-8.5c1.5-1 3.5-1 4.25-2Zm2.25-.75l.5-2.75");
}
</style><path class="gnj-4pblo"/>`,
		"fallback": "uix-sharp:butternut-squash",
	});
}

export default Component;
