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
		"content": `<style>.rvb0qhbdx {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.293 8.71L10 12M10 12L6.707 15.29M10 12L6.707 8.71M10 12L13.293 15.29M22 12L15 4H2V20H15L22 12Z");
}
</style><path class="rvb0qhbdx"/>`,
		"fallback": "keyline-icons:delete-forward-sharp",
	});
}

export default Component;
