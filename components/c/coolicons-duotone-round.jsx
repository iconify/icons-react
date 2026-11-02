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
		"content": `<style>.d60tyn8oc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.236 8.196C6.652 7.356 4 9.283 4 12a4 4 0 1 0 8 0a4 4 0 1 1 8 0c0 2.717-2.652 4.644-5.236 3.804");
}
</style><path class="d60tyn8oc"/>`,
		"fallback": "coolicons:coolicons-duotone-round",
	});
}

export default Component;
