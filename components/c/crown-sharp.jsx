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
		"content": `<style>.gskaorbpq {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3.5 20L2 6L7.5 11L12 4L16.5 11L22 6L20.5 20L3.5 20ZM2.9643 15L21.0357 15");
}
</style><path class="gskaorbpq"/>`,
		"fallback": "keyline-icons:crown-sharp",
	});
}

export default Component;
