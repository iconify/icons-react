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
		"content": `<style>.si2fsip-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4v4.83h4.26L24 16.21v-4.84h-4.26Zm0 15.07L37.22 42l-3.51 2L26 30.7V44h-4V30.7L14.29 44l-3.51-2z");
}
</style><path class="si2fsip-z"/>`,
		"fallback": "arcticons:aimsicd",
	});
}

export default Component;
