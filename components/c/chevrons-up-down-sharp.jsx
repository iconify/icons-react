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
		"content": `<style>.ivzo09bad {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.7071 9.2929L12 4L17.2929 9.2929M6.7071 14.7071L12 20L17.2929 14.7071");
}
</style><path class="ivzo09bad"/>`,
		"fallback": "keyline-icons:chevrons-up-down-sharp",
	});
}

export default Component;
