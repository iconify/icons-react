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
		"content": `<style>.yq3fyoi2w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm-15.6 5.2h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm-15.6 5.2h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm-15.6 5.2h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9zm5.2 0h2.9v2.9h-2.9z");
}
</style><path class="yq3fyoi2w"/>`,
		"fallback": "iconoven:chart-waffle-sharp",
	});
}

export default Component;
