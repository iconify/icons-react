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
		"content": `<style>.n8idp9_5i {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 3L22 3M2 9L16 9M2 15L22 15M2 21L16 21");
}
</style><path class="n8idp9_5i"/>`,
		"fallback": "keyline-icons:align-left-sharp-two-tone",
	});
}

export default Component;
