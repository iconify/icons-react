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
		"content": `<style>.e0q_85d2v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 3h12v18H6Zm4 5h4m-4 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><path class="e0q_85d2v"/>`,
		"fallback": "coolicons:doorbell-sharp",
	});
}

export default Component;
