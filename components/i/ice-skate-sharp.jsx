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
		"content": `<style>.do8ghdcgp {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 4L4 6L4 17L19 17L19 14.5135C19 13.5617 18.5671 12.6418 17.7886 12.0941C16.4131 11.1263 14.3296 10 11 10L11 2L11 1M7 17L7 22M14 17L14 22M2 22L19 22C20.1046 22 21 21.1046 21 20L21 19");
}
</style><path class="do8ghdcgp"/>`,
		"fallback": "keyline-icons:ice-skate-sharp",
	});
}

export default Component;
