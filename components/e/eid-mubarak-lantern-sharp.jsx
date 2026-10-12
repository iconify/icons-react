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
		"content": `<style>.oe_nlabzu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13 2.75a1.75 1.75 0 1 0 0 3.5m-4.25 5.5a3.25 3.25 0 0 1 6.5 0Zm0 0h6.5v6.75h-6.5zm3.25 2v2.75m-2 2h4l-.5 2.75h-3Z");
}
</style><path class="oe_nlabzu"/>`,
		"fallback": "iconoven:eid-mubarak-lantern-sharp",
	});
}

export default Component;
