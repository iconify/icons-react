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
		"content": `<style>.iv1pijluh {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 2L18 21M21.2929 17.7071L18 21L14.7071 17.7071M6 22L6 3M9.2929 6.2929L6 3L2.7071 6.2929");
}
</style><path class="iv1pijluh"/>`,
		"fallback": "keyline-icons:arrow-up-down-sharp",
	});
}

export default Component;
