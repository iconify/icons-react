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
		"content": `<style>.p2itfyboc {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L14 3L14 8L3 8L3 3ZM10 16L21 16L21 21L10 21L10 16ZM6 8L6 18.5L10 18.5");
}
</style><path class="p2itfyboc"/>`,
		"fallback": "keyline-icons:diagram-subtask-sharp",
	});
}

export default Component;
