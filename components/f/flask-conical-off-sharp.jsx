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
		"content": `<style>.qw124pgac {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.7058 18.7058L19.9999 22L4.0001 22L9.0769 9.0769M5.5715 18L18 18M9.5 4.8431L9.5 3.8431L9.5 2L14.5 2L14.5 8L15.0456 9.3887L15.5008 10.5475M7 2L17 2M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="qw124pgac"/>`,
		"fallback": "keyline-icons:flask-conical-off-sharp",
	});
}

export default Component;
