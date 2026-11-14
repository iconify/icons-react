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
		"content": `<style>.hr7t-dbrc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3v18m0-15.5h17m-12 3h11v8h-11Zm2-3v3m7-3v3m-6.5 4h6");
}
</style><path class="hr7t-dbrc"/>`,
		"fallback": "uix-sharp:hanging-shop-sign",
	});
}

export default Component;
