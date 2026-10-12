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
		"content": `<style>.g50uq2bfu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 8.25v-3h4.5v3m-7.75 0h11v12.5h-11zm3.5 3.5v5.5m4-5.5v5.5m4.75-3l2 2l4.25-4.5");
}
</style><path class="g50uq2bfu"/>`,
		"fallback": "iconoven:check-in-kiosk-sharp",
	});
}

export default Component;
