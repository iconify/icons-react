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
		"content": `<style>.df-yk4ces {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.833 19.125h4.334v13.542M17.175 27.9a4.875 4.875 0 1 1 0-7.8m21.667 0a4.875 4.875 0 1 0 0 7.8");
}

.htmw1ubfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 15.333h39v17.334h-39z");
}

.k40vdob6v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.833 15.333v13.542h4.334");
}
</style><path class="htmw1ubfx"/><path class="k40vdob6v"/><path class="df-yk4ces"/>`,
		"fallback": "arcticons:cic",
	});
}

export default Component;
