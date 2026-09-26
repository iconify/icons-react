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
		"content": `<style>.l6gn0sbrn {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 21L3 21L3 5L21 5L21 12M6 11L18 11M8 2L8 8M16 2L16 8M14.7071 17.7071L17 20L21.2929 15.7071");
}
</style><path class="l6gn0sbrn"/>`,
		"fallback": "keyline-icons:calendar-check-sharp",
	});
}

export default Component;
