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
		"content": `<style>.v150msgiv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.11 20.42l-4.52-4.51L3.5 24L24 44.5h0l8.09-8.09l-4.51-4.52L24 35.47L12.53 24zm15.78 7.16l4.52 4.51L44.5 24L24 3.5h0l-8.09 8.09l4.51 4.52L24 12.53L35.47 24z");
}
</style><path class="v150msgiv"/>`,
		"fallback": "arcticons:brackeyside",
	});
}

export default Component;
