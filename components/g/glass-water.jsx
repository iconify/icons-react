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
		"content": `<style>.ac0xt8_xz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m18 12l-.802 7.22A2 2 0 0 1 15.21 21H8.79a2 2 0 0 1-1.988-1.78L5.221 4.989A1.79 1.79 0 0 1 7 3h10a1.79 1.79 0 0 1 1.78 1.988zM6 12h12");
}
</style><path class="ac0xt8_xz"/>`,
		"fallback": "coolicons:glass-water",
	});
}

export default Component;
