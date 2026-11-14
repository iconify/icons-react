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
		"content": `<style>.uhkmbt-7n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.654 17.232q-.09.617-.154 1.268H9c-.5-5-2-8.5-6-9v-5h16.5v5c-1.961.245-3.321 1.211-4.257 2.722M3 7.5h16.5M16 15h5l-1 4.5h-3Zm1 4.5h3v2h-3Z");
}
</style><path class="uhkmbt-7n"/>`,
		"fallback": "uix-sharp:diaper-cream",
	});
}

export default Component;
