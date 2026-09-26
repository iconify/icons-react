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
		"content": `<style>.lz2kdjbhf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 12.1229L11.5875 18.8261C11.8153 19.058 12.1847 19.058 12.4125 18.8261L19 12.1229M12 5V18.0587");
}
</style><path class="lz2kdjbhf"/>`,
		"fallback": "keyline-icons:arrow-down-fill",
	});
}

export default Component;
