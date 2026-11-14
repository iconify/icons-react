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
		"content": `<style>.zrz-mccst {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21v-8m0 0L5.5 6.5M12 13l6.5-6.5m-13 4v-4h4m5 0h4v4");
}
</style><path class="zrz-mccst"/>`,
		"fallback": "uix-sharp:if-else",
	});
}

export default Component;
