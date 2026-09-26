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
		"content": `<style>.ra9ry8b0o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 4V20M11 4V20M2 12H11M16.75 15.1L19 13V20M16 20H22");
}
</style><path class="ra9ry8b0o"/>`,
		"fallback": "keyline-icons:heading-1",
	});
}

export default Component;
