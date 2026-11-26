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
		"content": `<style>.mii6eh4-p {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 8L18 14L7 20ZM1 14L7 14M18 14L23 14M13 3L13 11.2727");
}
</style><path class="mii6eh4-p"/>`,
		"fallback": "keyline-icons:gate-buffer-tri-state-sharp",
	});
}

export default Component;
