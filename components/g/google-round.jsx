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
		"content": `<style>.aqx7c2hlr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20.944 11H13v3h4.123m0 0a5.5 5.5 0 1 1-2.117-6.605l2.655-2.392A9 9 0 0 0 3 12a9 9 0 0 0 9 9a9 9 0 0 0 8.944-10");
}
</style><path class="aqx7c2hlr"/>`,
		"fallback": "coolicons:google-round",
	});
}

export default Component;
