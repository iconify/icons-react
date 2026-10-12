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
		"content": `<style>.t54x8tc9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8.25v-3h4.5v3m-7.75 0h11v12.5h-11zm3.5 3.5v5.5m4-5.5v5.5M16 14.5h5.25m-3-3l3 3l-3 3");
}
</style><path class="t54x8tc9a"/>`,
		"fallback": "iconoven:check-out-sharp",
	});
}

export default Component;
