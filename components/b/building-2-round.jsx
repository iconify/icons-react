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
		"content": `<style>.wws-kobon {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20h18m-9 0V7a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v13m7-9.4l.126-.1a3 3 0 0 1 3.748 0l1.625 1.299A4 4 0 0 1 19 14.923V20");
}
</style><path class="wws-kobon"/>`,
		"fallback": "coolicons:building-2-round",
	});
}

export default Component;
