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
		"content": `<style>.i-wycunhe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.76q-.21 0-.42.51L9.86 8.41q-.42 1.02-1.51 1.11l-4.48.35q-1.1.08-.26.8l3.42 2.91q.83.71.58 1.78l-1.05 4.37q-.26 1.07.68.49l3.82-2.34q.47-.29.94-.29Z");
}
</style><path class="i-wycunhe"/>`,
		"fallback": "iconoven:half-star",
	});
}

export default Component;
