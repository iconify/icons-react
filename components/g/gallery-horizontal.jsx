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
		"content": `<style>.bqyc33b5s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 3L15 3C16.10457 3 17 3.89543 17 5L17 19C17 20.10457 16.10457 21 15 21L9 21C7.89543 21 7 20.10457 7 19L7 5C7 3.89543 7.89543 3 9 3ZM3 3V21M21 3V21");
}
</style><path class="bqyc33b5s"/>`,
		"fallback": "keyline-icons:gallery-horizontal",
	});
}

export default Component;
