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
		"content": `<style>.chrp9eb_h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 6.5L18 12l-5.5 5.5m-6-11L12 12l-5.5 5.5");
}
</style><path class="chrp9eb_h"/>`,
		"fallback": "uix-sharp:chevrons-right",
	});
}

export default Component;
