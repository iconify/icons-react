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
		"content": `<style>.esq479b1q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.871 13.786l11.258-6.5l2 3.464L10.5 14l1.451 5.513l-3.464 2l-1.668-5.388l-1.948 1.125ZM15.5 4.5v-2M18 6l2-2m-1.25 4.5h2.75");
}
</style><path class="esq479b1q"/>`,
		"fallback": "uix-sharp:flare-gun",
	});
}

export default Component;
