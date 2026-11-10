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
		"content": `<style>.mx_-vuqji {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22.352 11.15L19.998 9.15L11.998 3L3.998 9.15L1.645 11.15M3.998 9.15V21H19.998V9.15M9.498 9.28L15.874 13.5L9.498 17.72V9.28Z");
}
</style><path class="mx_-vuqji"/>`,
		"fallback": "keyline-icons:house-play-sharp",
	});
}

export default Component;
