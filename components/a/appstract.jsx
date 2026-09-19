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
		"content": `<style>.psc7hnbjd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.813 27.469h32.374M24 5.5l-18.5 37h37z");
}
</style><path class="psc7hnbjd"/>`,
		"fallback": "arcticons:appstract",
	});
}

export default Component;
