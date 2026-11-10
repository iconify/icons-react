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
		"content": `<style>.e26yd6z6b {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 8C18.657 8 20 6.66 20 5C20 3.34 18.657 2 17 2C15.343 2 14 3.34 14 5C14 6.66 15.343 8 17 8ZM17 8V16M17 16C15.343 16 14 17.34 14 19C14 20.66 15.343 22 17 22C18.657 22 20 20.66 20 19C20 17.34 18.657 16 17 16ZM10 7.51L4 12L10 16.49V7.51Z");
}
</style><path class="e26yd6z6b"/>`,
		"fallback": "keyline-icons:guidepoint-vertical-arrow-left-sharp",
	});
}

export default Component;
