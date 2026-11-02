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
		"content": `<style>.zu8480blb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m16 11l4 8c.46.919-.081 2-1 2H5c-.919 0-1.46-1.081-1-2l7-14a1.118 1.118 0 0 1 2 0zM9 9h6m-9 6h12");
}
</style><path class="zu8480blb"/>`,
		"fallback": "coolicons:chart-pyramid",
	});
}

export default Component;
