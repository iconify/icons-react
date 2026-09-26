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
		"content": `<style>.dyhpmm--v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 3L11 3C12.10457 3 13 3.89543 13 5L13 19C13 20.10457 12.10457 21 11 21L5 21C3.89543 21 3 20.10457 3 19L3 5C3 3.89543 3.89543 3 5 3ZM17 5V19M21 7V17");
}
</style><path class="dyhpmm--v"/>`,
		"fallback": "keyline-icons:gallery-horizontal-start",
	});
}

export default Component;
