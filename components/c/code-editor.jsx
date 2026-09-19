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
		"content": `<style>.kgii1ibgb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.592 37.092L4.5 24l13.092-13.092m2.824 26.202l7.218-26.219m2.774.017L43.5 24L30.408 37.092");
}
</style><path class="kgii1ibgb"/>`,
		"fallback": "arcticons:code-editor",
	});
}

export default Component;
