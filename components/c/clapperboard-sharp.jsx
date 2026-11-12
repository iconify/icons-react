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
		"content": `<style>.e4lj602_a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 9h18v12H3Zm0-3l16-3l.563 3l-16 3zm5.333-1l.563 3m4.77-4l.563 3M10 12l5 3l-5 3z");
}
</style><path class="e4lj602_a"/>`,
		"fallback": "coolicons:clapperboard-sharp",
	});
}

export default Component;
