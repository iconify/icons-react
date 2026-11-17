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
		"content": `<style>.qyu0e6b4l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7h18v6H3zm2 6v5m14-5v5M3 18h4m10 0h4M3 7l6 6m0-6l6 6m0-6l6 6");
}
</style><path class="qyu0e6b4l"/>`,
		"fallback": "coolicons:barrier-sharp",
	});
}

export default Component;
