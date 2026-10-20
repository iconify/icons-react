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
		"content": `<style>.d0szq6bvk {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 22L5 2M1.7071 18.7071L5 22L8.2929 18.7071M1.7071 5.2929L5 2L8.2929 5.2929M11 14L22 14L22 22ZM11 10L22 10L22 2Z");
}
</style><path class="d0szq6bvk"/>`,
		"fallback": "keyline-icons:flip-3-vertical-sharp",
	});
}

export default Component;
