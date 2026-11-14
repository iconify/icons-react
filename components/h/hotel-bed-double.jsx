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
		"content": `<style>.u9zqbpbgs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19V9m18 10v-6H3m2-4h6v4H5Zm8 0h6v4h-6ZM3 17h18");
}
</style><path class="u9zqbpbgs"/>`,
		"fallback": "uix-sharp:hotel-bed-double",
	});
}

export default Component;
