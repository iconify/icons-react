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
		"content": `<style>.u6pp4h1ys {
  d: path("M6 18a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-3 2.5h11M16 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uoa5jrb1a {
  d: path("m2.704 14.562l9.011-6.31l2.581 3.686l-9.011 6.31Z");
}
</style><g class="ulnmmdpxh"><path class="uoa5jrb1a"/><path class="u6pp4h1ys"/></g>`,
		"fallback": "uix-sharp:ball-launcher",
	});
}

export default Component;
