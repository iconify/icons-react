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
		"content": `<style>.fhn-lv1-v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24.363 3.863l20.5 20.5l-20.5 20.499l-20.5-20.5z");
}

.s7fpvo7ii {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m39.53 19.03l-7.417 7.416l-7.75 18.417");
}
</style><path class="fhn-lv1-v"/><path class="s7fpvo7ii"/>`,
		"fallback": "arcticons:commbank",
	});
}

export default Component;
