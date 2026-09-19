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
		"content": `<style>.cc-t30bzs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11 30.5a13 13 0 1 0 3.808-9.192M11 30.5v-26");
}
</style><path class="cc-t30bzs"/>`,
		"fallback": "arcticons:bxactions",
	});
}

export default Component;
