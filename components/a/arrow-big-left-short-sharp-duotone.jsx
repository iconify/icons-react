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
		"content": `<style>.wngzm_bna {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12L13 2L13 7L21 7L21 17L13 17L13 22Z");
}
</style><path class="wngzm_bna"/>`,
		"fallback": "keyline-icons:arrow-big-left-short-sharp-duotone",
	});
}

export default Component;
