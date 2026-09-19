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
		"content": `<style>.ii2merbrf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22 43.5c10.77 0 19.5-8.73 19.5-19.5S32.77 4.5 22 4.5H8.5v39z");
}

.q__9tb3av {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.5 14H22c5.523 0 10 4.477 10 10s-4.477 10-10 10h-3v-9");
}
</style><path class="ii2merbrf"/><path class="q__9tb3av"/>`,
		"fallback": "arcticons:d-keys",
	});
}

export default Component;
