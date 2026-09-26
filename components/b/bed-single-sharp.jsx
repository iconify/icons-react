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
		"content": `<style>.q3ga9tbmh {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 11L20 11L20 20L4 20L4 11ZM7 11L7 4L17 4L17 11M4 15L20 15");
}
</style><path class="q3ga9tbmh"/>`,
		"fallback": "keyline-icons:bed-single-sharp",
	});
}

export default Component;
