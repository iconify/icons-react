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
		"content": `<style>.vst9gbbqy {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1 12L5 12L8 4L16 20L19 12L23 12");
}
</style><path class="vst9gbbqy"/>`,
		"fallback": "keyline-icons:activity-sharp-duotone",
	});
}

export default Component;
