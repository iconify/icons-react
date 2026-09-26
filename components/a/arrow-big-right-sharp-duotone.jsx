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
		"content": `<style>.i_3-hbgnq {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 12L14 20L14 16L2 16L2 8L14 8L14 4Z");
}
</style><path class="i_3-hbgnq"/>`,
		"fallback": "keyline-icons:arrow-big-right-sharp-duotone",
	});
}

export default Component;
