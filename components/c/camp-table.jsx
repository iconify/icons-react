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
		"content": `<style>.whdbt2bwd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h19v3h-19ZM5 8l5 11m0-11L5 19m9-11l5 11m0-11l-5 11");
}
</style><path class="whdbt2bwd"/>`,
		"fallback": "uix-sharp:camp-table",
	});
}

export default Component;
