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
		"content": `<style>.h0qgeuwow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z");
}

.kj_slxm2h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.235 25.302h11.53V34.5h-11.53zm1.165 0v-2.203a4.6 4.6 0 1 1 9.2 0v2.203");
}

.zypxg1zux {
  cx: 24px;
  cy: 29.901px;
  r: 0.75px;
  fill: currentColor;
}
</style><path class="h0qgeuwow"/><path class="kj_slxm2h"/><circle class="zypxg1zux"/>`,
		"fallback": "arcticons:folder-lock",
	});
}

export default Component;
