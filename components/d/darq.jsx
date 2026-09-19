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
		"content": `<style>.pmfv6-bfi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.52 45.22a21.504 21.504 0 0 1 .02-42.443m.02 42.283V2.848m3.986 4.651c8.377 0 16.928 6.173 16.928 16.501s-8.551 16.501-16.928 16.501m0 0V7.5");
}

.t23erkbai {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.54 2.777A21.502 21.502 0 1 1 24 45.5a22 22 0 0 1-3.48-.28");
}
</style><path class="t23erkbai"/><path class="pmfv6-bfi"/>`,
		"fallback": "arcticons:darq",
	});
}

export default Component;
