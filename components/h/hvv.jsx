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
		"content": `<style>.cdr1h4gdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10 17l15.75 7L10 31v10.5l28-14v-7l-28-14z");
}
</style><path class="cdr1h4gdl"/>`,
		"fallback": "arcticons:hvv",
	});
}

export default Component;
