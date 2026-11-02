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
		"content": `<style>.nbstr3p7n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m5 17l4 4l4-4m-4 4V3h10v10");
}
</style><path class="nbstr3p7n"/>`,
		"fallback": "coolicons:arrow-u-turn-left-down-duocolor-sharp",
	});
}

export default Component;
