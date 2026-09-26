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
		"content": `<style>.nedkxzbba {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 3L21 3L21 11M11 21L3 21L3 13");
}
</style><path class="nedkxzbba"/>`,
		"fallback": "keyline-icons:fullscreen-2-sharp-fill",
	});
}

export default Component;
