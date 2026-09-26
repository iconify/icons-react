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
		"content": `<style>.pu3p-s68u {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 10L14 10L14 2M14.1757 9.8243L21.2929 2.7071M2 14L10 14L10 22M9.8243 14.1757L2.7071 21.2929");
}
</style><path class="pu3p-s68u"/>`,
		"fallback": "keyline-icons:fullscreen-exit-sharp-fill",
	});
}

export default Component;
