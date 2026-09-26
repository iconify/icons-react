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
		"content": `<style>.x3lnmkg_e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 4.264C12.2804 3.8481 11.3605 3.9168 10.7072 4.4703L3.7072 10.4009C3.2586 10.7809 3 11.339 3 11.9268L3 20C3 21.1046 3.8954 22 5 22L19 22C20.1046 22 21 21.1046 21 20L21 12M9 22L9 15L15 15L15 22M20 2L17 5L21 5L18 8");
}
</style><path class="x3lnmkg_e"/>`,
		"fallback": "keyline-icons:home-zap",
	});
}

export default Component;
