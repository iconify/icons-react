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
		"content": `<style>.mh7h03bqy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 12h5m1-2h1l.15-.99l.45-3.02l.15-.99h2.25l.15.99l.45 3.02l.15.99h2v4h-2l-.15.99l-.45 3.02l-.15.99H10.5l-.15-.99l-.45-3.02l-.15-.99h-2v-4zm9.25.5h3.25v3H18z");
}
</style><path class="mh7h03bqy"/>`,
		"fallback": "iconoven:cannula-sharp",
	});
}

export default Component;
