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
		"content": `<style>.phr3gzdys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 15V7c0-1.838 2.162-2.919 4-2l4 2c1.648.824 1.648 3.176 0 4zm0 0v6");
}
</style><path class="phr3gzdys"/>`,
		"fallback": "coolicons:flag-triangle-round",
	});
}

export default Component;
