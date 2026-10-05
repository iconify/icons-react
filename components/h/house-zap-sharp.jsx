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
		"content": `<style>.zfw25ln1g {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1.6141 12.0785L2 11.7782L12 3.9963L12.3859 4.2966M4 10.2218L4 22L20 22L20 12L20 11M9 22L9 19C9 17.3431 10.3431 16 12 16C13.6569 16 15 17.3431 15 19L15 22M19.2929 1.7071L19 2L16 5L20 5L17 8L16.7071 8.2929");
}
</style><path class="zfw25ln1g"/>`,
		"fallback": "keyline-icons:house-zap-sharp",
	});
}

export default Component;
