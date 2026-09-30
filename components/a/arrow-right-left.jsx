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
		"content": `<style>.o7oa-e1ci {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6L21 6M18 3L21 6L18 9M21 18L3 18M6 15L3 18L6 21");
}
</style><path class="o7oa-e1ci"/>`,
		"fallback": "keyline-icons:arrow-right-left",
	});
}

export default Component;
