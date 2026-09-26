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
		"content": `<style>.zu2kcbevm {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 3L21 13L3 13L3 3ZM4 17L20 17M6 21L18 21");
}
</style><path class="zu2kcbevm"/>`,
		"fallback": "keyline-icons:gallery-vertical-start-sharp",
	});
}

export default Component;
