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
		"content": `<style>.mn-9uubxy {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7L3 3L7 3M9 3L14 3M20 8L20 3L16 3M8 20L3 20L3 16M3 9L3 14M11.0009 11L20.9991 11L18 15.5001L18 19.5L14 20.9994L14 15.5001Z");
}
</style><path class="mn-9uubxy"/>`,
		"fallback": "keyline-icons:filter-dashed-panel-sharp",
	});
}

export default Component;
