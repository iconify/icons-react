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
		"content": `<style>.g9dyq8brn {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.7071 21.2929L12 16L17.2929 21.2929M6.7071 14.7929L12 9.5L17.2929 14.7929M6.7071 8.2929L12 3L17.2929 8.2929");
}
</style><path class="g9dyq8brn"/>`,
		"fallback": "keyline-icons:chevrons-up-3-sharp-two-tone",
	});
}

export default Component;
