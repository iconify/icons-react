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
		"content": `<style>.e6mgsbcxh {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 13L20 2L4 2L4 22M11 22L4 22L4 18L11 18M8 6L8 14M13.7071 15.7071L20.2929 22.2929M20.2929 15.7071L13.7071 22.2929");
}
</style><path class="e6mgsbcxh"/>`,
		"fallback": "keyline-icons:book-x-sharp",
	});
}

export default Component;
