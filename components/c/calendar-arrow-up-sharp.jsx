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
		"content": `<style>.j5-9mdbds {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 21L3 21L3 5L21 5L21 12M6 11L18 11M8 2L8 8M16 2L16 8M18 22L18 15M14.7071 18.2929L18 15L21.2929 18.2929");
}
</style><path class="j5-9mdbds"/>`,
		"fallback": "keyline-icons:calendar-arrow-up-sharp",
	});
}

export default Component;
