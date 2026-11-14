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
		"content": `<style>.e9a_yd4lq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.027 21.5H12c-3.75 0-7-3-7-7c0-3 1.5-5 3-6.5c.25 2 1.25 3.25 2.5 3.75c-.25-3.5.25-6.75 1.5-9.25c2.629 2.254 5.259 5.072 6.404 8.454m.76 3.157l2.475 2.475l-5.303 5.303l-2.475-2.475Zm-2.651 2.652l2.474 2.474");
}
</style><path class="e9a_yd4lq"/>`,
		"fallback": "uix-sharp:anti-inflammatory",
	});
}

export default Component;
