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
		"content": `<style>.iem4vkb-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 10H14.5C14.22386 10 14 9.77614 14 9.5V3M3 14H9.5C9.77614 14 10 14.22386 10 14.5V21");
}
</style><path class="iem4vkb-p"/>`,
		"fallback": "keyline-icons:fullscreen-exit-2-fill",
	});
}

export default Component;
