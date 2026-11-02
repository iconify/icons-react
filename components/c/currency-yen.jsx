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
		"content": `<style>.az39e9u_s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m6 5l6 6l6-6m-6 6v8m-4-6h4m0 0h4m-8 4h4m0 0h4");
}
</style><path class="az39e9u_s"/>`,
		"fallback": "coolicons:currency-yen",
	});
}

export default Component;
