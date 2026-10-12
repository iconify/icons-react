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
		"content": `<style>.csm1x5b4u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.25 8.5l11.5-2.75M12 7.1v14.15m-3.25 0h6.5m-9-12.75l-3 5.75m3-5.75l3 5.75m8.5-8.5l-3 5.5m3-5.5l3 5.5m-18 3h7a3.5 3.5 0 0 1-7 0Zm11.5-3h7a3.5 3.5 0 0 1-7 0Z");
}
</style><path class="csm1x5b4u"/>`,
		"fallback": "iconoven:bias-scale-sharp",
	});
}

export default Component;
