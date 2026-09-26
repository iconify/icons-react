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
		"content": `<style>.v1ql46bue {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 2L15 2M3 7L21 7M6 7L18 7L18 22L6 22L6 7Z");
}
</style><path class="v1ql46bue"/>`,
		"fallback": "keyline-icons:bin-sharp",
	});
}

export default Component;
