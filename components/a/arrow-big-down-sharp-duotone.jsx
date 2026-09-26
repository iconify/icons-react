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
		"content": `<style>.yk0lrcc_d {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 22L4 14L8 14L8 2L16 2L16 14L20 14Z");
}
</style><path class="yk0lrcc_d"/>`,
		"fallback": "keyline-icons:arrow-big-down-sharp-duotone",
	});
}

export default Component;
