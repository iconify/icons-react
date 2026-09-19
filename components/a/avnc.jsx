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
		"content": `<style>.bkyf0ybrn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m5 36l11-24l11 24m-6-24l11 24l11-24");
}
</style><path class="bkyf0ybrn"/>`,
		"fallback": "arcticons:avnc",
	});
}

export default Component;
