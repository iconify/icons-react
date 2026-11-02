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
		"content": `<style>.sjgh8llbn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 12h1c1.194 0 2.403-1.208 3-3l2-6l6 18l2-6c.597-1.792 1.806-3 3-3h1");
}
</style><path class="sjgh8llbn"/>`,
		"fallback": "coolicons:activity-duotone",
	});
}

export default Component;
