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
		"content": `<style>.ekl-cvb1f {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 7L22 7L22 17L2 17L2 7ZM6 10L6 14");
}
</style><path class="ekl-cvb1f"/>`,
		"fallback": "keyline-icons:input-sharp",
	});
}

export default Component;
