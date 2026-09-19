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
		"content": `<style>.uo4s8fb7b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 21.446L24 6.554L4.5 21.446v20h39z");
}
</style><path class="uo4s8fb7b"/>`,
		"fallback": "arcticons:home-smart",
	});
}

export default Component;
