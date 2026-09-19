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
		"content": `<style>.c50s5h_cu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5v37h37V10.515H18.194L14.674 5.5zm0 12.5h37");
}
</style><path class="c50s5h_cu"/>`,
		"fallback": "arcticons:ds-file",
	});
}

export default Component;
