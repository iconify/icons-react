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
		"content": `<style>.psdl4i81k {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 16L18 16L18 21L2 21ZM22 15L22 22M19 12L13.5 12C11.0147 12 9 9.9853 9 7.5C9 5.6082 10.1832 3.9184 11.9609 3.2714L12.8723 2.9397M15 3L16 3C17.6569 3 19 4.3431 19 6L19 7.5C20.6569 7.5 22 8.8431 22 10.5L22 13M19 7.5L16.5 7.5");
}
</style><path class="psdl4i81k"/>`,
		"fallback": "keyline-icons:cigarette-sharp",
	});
}

export default Component;
