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
		"content": `<style>.wtxyddcvh {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 4L21 4L21 20L3 20L3 15M6.7279 3.6508L3 8L6.7279 12.3492M10.7007 3.6508L14.4286 8L10.7007 12.3492");
}
</style><path class="wtxyddcvh"/>`,
		"fallback": "keyline-icons:code-panel-sharp-fill",
	});
}

export default Component;
