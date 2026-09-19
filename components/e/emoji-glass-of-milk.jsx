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
		"content": `<style>.a1sxqubbp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.147 42.5h-17.59l-5.63-37h28.146zM11.166 13.64h25.823");
}
</style><path class="a1sxqubbp"/>`,
		"fallback": "arcticons:emoji-glass-of-milk",
	});
}

export default Component;
