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
		"content": `<style>.h_1yljb5q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20h18m-9 0V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14m7-9.4l.75-.6a2 2 0 0 1 2.5 0l3 2.4a2 2 0 0 1 .75 1.56V20");
}
</style><path class="h_1yljb5q"/>`,
		"fallback": "coolicons:building-2",
	});
}

export default Component;
