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
		"content": `<style>.c48p4gypw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 4.75v14.5m9-14.5v14.5m-9-7.25h9m3.25 2.5h4m-4 4.5H19");
}
</style><path class="c48p4gypw"/>`,
		"fallback": "iconoven:heading-sharp",
	});
}

export default Component;
