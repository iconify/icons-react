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
		"content": `<style>.pkaj1g8gu {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 18L18 21L2 21L2 16L16 16M9.4832 5.2386L10.151 4.4942C10.6341 3.9557 11.25 3.5301 11.9609 3.2714L12.9006 2.9294M15 3L16 3C17.6569 3 19 4.3431 19 6L19 7.5C20.6569 7.5 22 8.8431 22 10.5L22 13M19 7.5L16.5 7.5M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="pkaj1g8gu"/>`,
		"fallback": "keyline-icons:cigarette-off-sharp",
	});
}

export default Component;
