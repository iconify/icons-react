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
		"content": `<style>.gou-bdyhq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 21V7l2-4l2 4v14zm10 0V7l2-4l2 4v14zM3 10h2m4 0h6m4 0h2M3 16h2m4 0h6m4 0h2");
}
</style><path class="gou-bdyhq"/>`,
		"fallback": "coolicons:fence-sharp",
	});
}

export default Component;
