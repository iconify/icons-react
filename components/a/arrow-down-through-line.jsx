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
		"content": `<style>.v_x_xtbig {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 3L12 21M16 17L12 21L8 17M3 12L8 12M16 12L21 12");
}
</style><path class="v_x_xtbig"/>`,
		"fallback": "keyline-icons:arrow-down-through-line",
	});
}

export default Component;
