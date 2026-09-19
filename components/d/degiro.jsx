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
		"content": `<style>.d7jp6ab_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 36.28h-39v-10.1h39Zm0-14.46h-39v-10.1h39Z");
}
</style><path class="d7jp6ab_l"/>`,
		"fallback": "arcticons:degiro",
	});
}

export default Component;
