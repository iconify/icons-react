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
		"content": `<style>.k3mnphb-s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.111 39.415c0-13.653-10.139-24.938-23.298-26.735");
}

.klrjktb-x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.356 39.415h27.397L42.5 8.585H9.443L5.558 33.82a4.855 4.855 0 0 0 4.798 5.594m6.178-9.757l16.187-13.321");
}
</style><path class="klrjktb-x"/><path class="k3mnphb-s"/>`,
		"fallback": "arcticons:brb-bank",
	});
}

export default Component;
