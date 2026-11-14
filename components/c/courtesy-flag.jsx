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
		"content": `<style>.v0ebahb5l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5v19M2.5 6H21M11 6h9.5v8H11ZM4 21.5h6");
}
</style><path class="v0ebahb5l"/>`,
		"fallback": "uix-sharp:courtesy-flag",
	});
}

export default Component;
