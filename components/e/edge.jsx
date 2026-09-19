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
		"content": `<style>.imi7g-bld {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.204H9.895L4.5 21.732h14.105z");
}

.p-zton0gg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.537 9.741l-5.192 15.906H10.098L4.5 42.796h28.209L43.5 9.741z");
}
</style><path class="p-zton0gg"/><path class="imi7g-bld"/>`,
		"fallback": "arcticons:edge",
	});
}

export default Component;
