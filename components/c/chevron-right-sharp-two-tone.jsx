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
		"content": `<style>.ehihvu1_t {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.7071 5.7071L15 12L8.7071 18.2929");
}
</style><path class="ehihvu1_t"/>`,
		"fallback": "keyline-icons:chevron-right-sharp-two-tone",
	});
}

export default Component;
