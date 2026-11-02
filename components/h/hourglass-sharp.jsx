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
		"content": `<style>.irui7bl8q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 3v4l5 5l-5 5v4M17 3v4l-5 5l5 5v4M5 3h14M5 21h14");
}
</style><path class="irui7bl8q"/>`,
		"fallback": "coolicons:hourglass-sharp",
	});
}

export default Component;
