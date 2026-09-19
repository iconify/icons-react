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
		"content": `<style>.mrg47gb-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 26.925l-5.85 9.75l5.85-1.95l5.85 1.95Z");
}

.xp15q7bgg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 7.425L4.5 40.575l9.75-3.9L24 19.125l9.75 17.55l9.75 3.9Z");
}
</style><path class="xp15q7bgg"/><path class="mrg47gb-z"/>`,
		"fallback": "arcticons:armoury-crate",
	});
}

export default Component;
