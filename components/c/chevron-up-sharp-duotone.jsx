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
		"content": `<style>.r71waub-w {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5.7071 15.2929L12 9L18.2929 15.2929");
}
</style><path class="r71waub-w"/>`,
		"fallback": "keyline-icons:chevron-up-sharp-duotone",
	});
}

export default Component;
