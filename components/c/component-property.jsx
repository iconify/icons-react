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
		"content": `<style>.uhe0u-_si {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.726 17.226L2.5 10L10 2.5l7.5 7.5l-3.248 3.248m-1.556 1.556l-1.414 1.414M12.5 19h9m-6-3h3v6h-3Z");
}
</style><path class="uhe0u-_si"/>`,
		"fallback": "uix-sharp:component-property",
	});
}

export default Component;
