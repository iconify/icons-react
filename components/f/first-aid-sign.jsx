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
		"content": `<style>.fq0kv6y6g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8h14v13.5h-14Zm-2-5.5v3m0-1.5H20M7.5 4v4m8-4v4m-4 3v7.5m-3.75-3.75h7.5");
}
</style><path class="fq0kv6y6g"/>`,
		"fallback": "uix-sharp:first-aid-sign",
	});
}

export default Component;
