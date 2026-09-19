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
		"content": `<style>.s8-tqbbix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.34 36.27A21.51 21.51 0 0 1 36.27 6.34m5.39 5.39a21.51 21.51 0 0 1-29.93 29.93");
}
</style><path class="s8-tqbbix"/>`,
		"fallback": "arcticons:edpzero",
	});
}

export default Component;
