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
		"content": `<style>.dbjnrhboq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 3.75v16.5h16.5M8 17.25v-5m3.5 5v-9m3.5 9v-12m3.5 12v-3.5");
}
</style><path class="dbjnrhboq"/>`,
		"fallback": "iconoven:chart-bar-share-sharp",
	});
}

export default Component;
