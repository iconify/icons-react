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
		"content": `<style>.yhup0eb4h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 13a7 7 0 0 1 14 0v8H5zm7-7V3m-2 0h4m-5 8v6m6-6v6m-6-3h6");
}
</style><path class="yhup0eb4h"/>`,
		"fallback": "coolicons:hydrogen-sharp",
	});
}

export default Component;
