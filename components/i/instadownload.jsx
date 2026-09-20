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
		"content": `<style>.vzqebxbob {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.105 33.644L9.099 18.638h8.649V5.5h12.714v13.138h8.648zM8.578 42.5h30.844v-3.647H8.578z");
}
</style><path class="vzqebxbob"/>`,
		"fallback": "arcticons:instadownload",
	});
}

export default Component;
