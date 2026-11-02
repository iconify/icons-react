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
		"content": `<style>.x-xi7c3pj {
  fill: currentColor;
  d: path("M6 4h12a1 1 0 0 1 0 2h-3.999a5 5 0 0 1 .9 2H18a1 1 0 0 1 0 2h-3.099A5.01 5.01 0 0 1 10 14H8.414l4.293 4.293a.999.999 0 1 1-1.414 1.414l-6-6A1 1 0 0 1 6 12h4c1.27 0 2.405-.804 2.83-2H6a1 1 0 0 1 0-2h6.83A3.01 3.01 0 0 0 10 6H6a1 1 0 0 1 0-2");
}
</style><path class="x-xi7c3pj"/>`,
		"fallback": "coolicons:currency-rupee-fill-sharp",
	});
}

export default Component;
