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
		"content": `<style>.geroy08bs {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1.6141 12.0785L2 11.7782L12 3.9963L12.3859 4.2966M4 10.2218L4 22L20 22L20 12L20 11M9 22L9 19C9 17.3431 10.3431 16 12 16C13.6569 16 15 17.3431 15 19L15 22M15.7055 5.2971L18.3333 8L22.1371 1.5054");
}
</style><path class="geroy08bs"/>`,
		"fallback": "keyline-icons:house-check-sharp",
	});
}

export default Component;
