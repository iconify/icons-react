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
		"content": `<style>.n4wt8b4gm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 10.25h11.5v11H4.75zm5.75 3.25V18m-2.25-2.25h4.5m-4-8.25h3.5v2.75h-3.5zm1.75 0V3.75h5.75m2.5 2.75l1.5 2v.8a1.5 1.5 0 0 1-3 0v-.8z");
}
</style><path class="n4wt8b4gm"/>`,
		"fallback": "iconoven:hand-sanitizer-med-sharp",
	});
}

export default Component;
