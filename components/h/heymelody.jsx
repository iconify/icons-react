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
		"content": `<style>.jft3_msuw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 15.643v16.714A11.143 11.143 0 0 0 35.143 43.5V15.643A11.143 11.143 0 1 0 24 26.786");
}
</style><path class="jft3_msuw"/>`,
		"fallback": "arcticons:heymelody",
	});
}

export default Component;
