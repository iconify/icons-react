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
		"content": `<style>.tphuu_b9o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.398 16.294h8.477l-8.898 15.412H4.5zm21.625 0H43.5l-8.898 15.412h-8.477zm-5.819 0c1.707 0 2.561 1.517 1.463 3.443l-5.677 9.95c-.64 1.122-2.207 2.007-3.499 2.02H15.26l9.036-15.413z");
}
</style><path class="tphuu_b9o"/>`,
		"fallback": "arcticons:digihaat",
	});
}

export default Component;
