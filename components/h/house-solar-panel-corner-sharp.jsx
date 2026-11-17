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
		"content": `<style>.cxskctb3d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 21H4V10l8-7l5.714 5M17 21h-4l1-8h3m0 0h3l1 8h-4m-3-4h6m-3-4v8");
}
</style><path class="cxskctb3d"/>`,
		"fallback": "coolicons:house-solar-panel-corner-sharp",
	});
}

export default Component;
