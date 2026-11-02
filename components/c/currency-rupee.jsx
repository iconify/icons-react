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
		"content": `<style>.ecn-l84yx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 5h12M6 5h4a4 4 0 1 1 0 8H6l6 6M6 9h8m0 0h4");
}
</style><path class="ecn-l84yx"/>`,
		"fallback": "coolicons:currency-rupee",
	});
}

export default Component;
