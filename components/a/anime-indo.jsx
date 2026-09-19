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
		"content": `<style>.hwoh15byl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 40.022L24 7.979M20.318 28.53l-6.634 11.492h13.269z");
}

.o-uvrdb5q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.136 40.022L20.318 14.356L5.5 40.022");
}
</style><path class="hwoh15byl"/><path class="o-uvrdb5q"/>`,
		"fallback": "arcticons:anime-indo",
	});
}

export default Component;
