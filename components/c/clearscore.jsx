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
		"content": `<style>.ain8hlxxu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.09 41.593H42.5V5.5H6.408v17.412h7.432v-9.98h21.227V34.16H25.09zm-10.342-3.717a4.624 4.624 0 0 1-9.248 0h0a4.624 4.624 0 0 1 9.248 0");
}
</style><path class="ain8hlxxu"/>`,
		"fallback": "arcticons:clearscore",
	});
}

export default Component;
