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
		"content": `<style>.qa4gzdbgl {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 12L11 22L11 17L3 17L3 7L11 7L11 2Z");
}
</style><path class="qa4gzdbgl"/>`,
		"fallback": "keyline-icons:arrow-big-right-short-sharp",
	});
}

export default Component;
