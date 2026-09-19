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
		"content": `<style>.gzcig8o1w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.973 4.651V43.28M33.564 4.651V43.28M7.973 23.966h25.591");
}

.pjdo-drhr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.134 4.651v32.031");
}

.rpwmh7b7g {
  cx: 39.134px;
  cy: 42.937px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="gzcig8o1w"/><circle class="rpwmh7b7g"/><path class="pjdo-drhr"/>`,
		"fallback": "arcticons:hello-bank",
	});
}

export default Component;
