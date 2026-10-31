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
		"content": `<style>.gzv6fl3wk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 18L18 20.5C18 20.7761 17.7761 21 17.5 21L3.5 21C2.6716 21 2 20.3284 2 19.5L2 17.5C2 16.6716 2.6716 16 3.5 16L16 16M10.151 4.4942C10.6341 3.9557 11.25 3.5301 11.9609 3.2714M16 3C17.6569 3 19 4.3431 19 6L19 7.5C20.6569 7.5 22 8.8431 22 10.5L22 12M19 7.5L17.5 7.5M2 2L22 22");
}
</style><path class="gzv6fl3wk"/>`,
		"fallback": "keyline-icons:cigarette-off",
	});
}

export default Component;
