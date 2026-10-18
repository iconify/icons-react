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
		"content": `<style>.btknr5bvs {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 2L21 22M17 4.5L2 4.5M17 9.5L2 9.5M17 14.5L5 14.5M17 19.5L9 19.5");
}
</style><path class="btknr5bvs"/>`,
		"fallback": "keyline-icons:align-right-2-sharp",
	});
}

export default Component;
