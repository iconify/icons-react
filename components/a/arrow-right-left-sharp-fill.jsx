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
		"content": `<style>.e0uz77d9u {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 7L21 7M16.7071 2.7071L21 7L16.7071 11.2929M22 17L3 17M7.2929 21.2929L3 17L7.2929 12.7071");
}
</style><path class="e0uz77d9u"/>`,
		"fallback": "keyline-icons:arrow-right-left-sharp-fill",
	});
}

export default Component;
