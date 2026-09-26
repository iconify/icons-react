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
		"content": `<style>.r1mhh7bie {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11.8907 4L22 4L22 20L11.8907 20M2.2414 12L13.8907 12M8.1438 6.204L2 12L8.1438 17.796");
}
</style><path class="r1mhh7bie"/>`,
		"fallback": "keyline-icons:bracket-arrow-left-sharp",
	});
}

export default Component;
