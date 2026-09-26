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
		"content": `<style>.jc2r4ounr {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 6.002L10.4583 12L2 17.998L2 6.002ZM14 6.002L22 12L14 17.998L14 6.002Z");
}
</style><path class="jc2r4ounr"/>`,
		"fallback": "keyline-icons:fast-forward-sharp-duotone",
	});
}

export default Component;
