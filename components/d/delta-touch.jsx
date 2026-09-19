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
		"content": `<style>.pivkfrblr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.595 43.5V12.441H10.6L8.482 4.5h31.036l-2.137 8.014h-8.418V35.03z");
}
</style><path class="pivkfrblr"/>`,
		"fallback": "arcticons:delta-touch",
	});
}

export default Component;
