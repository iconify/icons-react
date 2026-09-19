import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bxzvu6bky {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.58 11.123l7.97 29.738M6.672 12.706l26.687-7.151a1.576 1.576 0 0 1 1.935 1.117l7.15 26.687a1.576 1.576 0 0 1-1.116 1.935l-26.688 7.15a1.575 1.575 0 0 1-1.935-1.116L5.556 14.64a1.575 1.575 0 0 1 1.117-1.935M27.45 7.138l7.969 29.739M20.015 9.13l7.97 29.739m8.892-26.288L7.138 20.55m33.723 6.9l-29.738 7.969m27.746-15.404l-29.738 7.97");
}
</style><path class="bxzvu6bky"/>`,
		"fallback": "arcticons:color-puzzle",
	});
}

export default Component;
