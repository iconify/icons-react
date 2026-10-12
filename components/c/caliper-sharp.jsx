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
		"content": `<style>.xrapg1sto {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.5h18.5v4H2.75zm9.25 0v1.75m3-1.75v1.75m3-1.75v1.75M3.5 8.5H6v10l-.23-.71l-2.79-8.58l-.23-.71zm6.25 0h2.5l-.23.71l-2.79 8.58l-.23.71v-10z");
}
</style><path class="xrapg1sto"/>`,
		"fallback": "iconoven:caliper-sharp",
	});
}

export default Component;
