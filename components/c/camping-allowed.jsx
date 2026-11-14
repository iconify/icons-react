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
		"content": `<style>.t022q6bcp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.286 19.5H3l9-15l6.126 10.21M12 12v4.8m0 2.4v.3m2.75-1.5l2 2L21 15.75");
}
</style><path class="t022q6bcp"/>`,
		"fallback": "uix-sharp:camping-allowed",
	});
}

export default Component;
