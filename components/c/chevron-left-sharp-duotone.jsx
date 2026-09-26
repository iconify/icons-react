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
		"content": `<style>.kczmf1wlc {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.2929 5.7071L9 12L15.2929 18.2929");
}
</style><path class="kczmf1wlc"/>`,
		"fallback": "keyline-icons:chevron-left-sharp-duotone",
	});
}

export default Component;
