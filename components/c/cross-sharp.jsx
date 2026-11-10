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
		"content": `<style>.zukovtsor {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 15.38V8.62H8.625V3H15.375V8.62H21V15.38H15.375V21H8.625V15.38H3Z");
}
</style><path class="zukovtsor"/>`,
		"fallback": "keyline-icons:cross-sharp",
	});
}

export default Component;
