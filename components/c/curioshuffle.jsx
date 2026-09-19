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
		"content": `<style>.lym4bor2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 4.5A5.5 5.5 0 0 0 33 10v25.5a8 8 0 0 1-8 8H9.5A5.5 5.5 0 0 0 15 38V12.5a8 8 0 0 1 8-8z");
}
</style><path class="lym4bor2m"/>`,
		"fallback": "arcticons:curioshuffle",
	});
}

export default Component;
