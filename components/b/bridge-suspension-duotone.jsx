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
		"content": `<style>.pfcj6q6vx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 15h18M6 3v16M18 3v16M6 6a6.325 6.325 0 0 0 12 0m-6 5v4M3 9l3-3m12 0l3 3");
}
</style><path class="pfcj6q6vx"/>`,
		"fallback": "coolicons:bridge-suspension-duotone",
	});
}

export default Component;
