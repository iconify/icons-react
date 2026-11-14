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
		"content": `<style>.iztx4boou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.731 2.992l5.277 5.277v7.462l-5.277 5.277H8.269l-5.277-5.277V8.269l5.277-5.277ZM12 7v6m0 3.5h.01");
}
</style><path class="iztx4boou"/>`,
		"fallback": "uix-sharp:alert-octagon",
	});
}

export default Component;
