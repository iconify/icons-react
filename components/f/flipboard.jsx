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
		"content": `<style>.gk8bz_wkx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.5 5.5h33a2 2 0 0 1 2 2v8.33a2 2 0 0 1-2 2H30.17v9.93a2.41 2.41 0 0 1-2.41 2.41h-9.93V40.5a2 2 0 0 1-2 2H7.5a2 2 0 0 1-2-2v-33a2 2 0 0 1 2-2");
}
</style><path class="gk8bz_wkx"/>`,
		"fallback": "arcticons:flipboard",
	});
}

export default Component;
