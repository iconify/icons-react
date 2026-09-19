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
		"content": `<style>.ihgqvjcoo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 6.078h37v11.948h-37zm13.029 11.948H42.5v11.948H18.529zm10.603 11.948H42.5v11.948H29.132z");
}
</style><path class="ihgqvjcoo"/>`,
		"fallback": "arcticons:bbc-sport",
	});
}

export default Component;
