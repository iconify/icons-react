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
		"content": `<style>.ipf6frjzo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.04 8.11V24m-.095-.022l-5.141-8.904M2.5 24c-.001 11.873 9.624 21.499 21.498 21.5s21.5-9.623 21.502-21.495V24c.001-11.873-9.624-21.499-21.498-21.5S2.502 12.123 2.5 23.996z");
}
</style><path class="ipf6frjzo"/>`,
		"fallback": "arcticons:emoji-clock-face-eleven-oclock",
	});
}

export default Component;
