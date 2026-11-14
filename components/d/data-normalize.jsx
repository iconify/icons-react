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
		"content": `<style>.zl46oun4a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5v17h17M6.5 7h13m-11 0v10.5m4-10.5v7m4-7v4");
}
</style><path class="zl46oun4a"/>`,
		"fallback": "uix-sharp:data-normalize",
	});
}

export default Component;
