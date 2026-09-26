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
		"content": `<style>.y1d-wu-4l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 8L14 2L8 8M14 2L14 18C14 20.2091 12.2091 22 10 22L4 22");
}
</style><path class="y1d-wu-4l"/>`,
		"fallback": "keyline-icons:corner-right-up-two-tone",
	});
}

export default Component;
