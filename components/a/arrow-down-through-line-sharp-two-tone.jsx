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
		"content": `<style>.flshn6b8c {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 2L12 21M16.2929 16.7071L12 21L7.7071 16.7071M2 12L9 12M15 12L22 12");
}
</style><path class="flshn6b8c"/>`,
		"fallback": "keyline-icons:arrow-down-through-line-sharp-two-tone",
	});
}

export default Component;
