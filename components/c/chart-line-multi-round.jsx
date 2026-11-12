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
		"content": `<style>.uh-6tjixw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m7 10l4-4l4 3l6-6M3 4v12a4 4 0 0 0 4 4h14M7 16l4-3l4 2l6-5");
}
</style><path class="uh-6tjixw"/>`,
		"fallback": "coolicons:chart-line-multi-round",
	});
}

export default Component;
