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
		"content": `<style>.y892mo3mv {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3L2 21L22 21L12 3ZM8.6667 9L15.3333 9M5.3333 15L18.6667 15");
}
</style><path class="y892mo3mv"/>`,
		"fallback": "keyline-icons:chart-pyramid-sharp",
	});
}

export default Component;
