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
		"content": `<style>.pkpje_b8a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4h18.5v3H2.75zm1.5 3h15.5v11.5H4.25zm0 5.75h15.5M10 16h4m-7.75 2.5v2.75m11.5-2.75v2.75");
}
</style><path class="pkpje_b8a"/>`,
		"fallback": "iconoven:beehive-farm-sharp",
	});
}

export default Component;
