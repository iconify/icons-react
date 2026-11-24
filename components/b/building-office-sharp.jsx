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
		"content": `<style>.i8pl8ik5b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 21V5h16v16M3 21h18M8 9v4m4-4v4m4-4v4m-6 8v-4h4v4");
}
</style><path class="i8pl8ik5b"/>`,
		"fallback": "coolicons:building-office-sharp",
	});
}

export default Component;
