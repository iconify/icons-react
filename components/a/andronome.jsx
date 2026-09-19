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
		"content": `<style>.zle4eacqa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.5 43.5L24 4.5l13.5 39m0-39L24 43.5");
}
</style><path class="zle4eacqa"/>`,
		"fallback": "arcticons:andronome",
	});
}

export default Component;
