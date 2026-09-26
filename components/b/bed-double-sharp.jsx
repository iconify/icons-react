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
		"content": `<style>.tk7uxg33b {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 11L22 11L22 20L2 20L2 11ZM5 11L5 4L19 4L19 11M2 15L22 15M12 11L12 15");
}
</style><path class="tk7uxg33b"/>`,
		"fallback": "keyline-icons:bed-double-sharp",
	});
}

export default Component;
