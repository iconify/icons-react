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
		"content": `<style>.k8mf6ccnk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.614 33.614l9.25 9.25v-37h-37l9.25 9.25h18.5zm-18.5 0V19.55l-9.229 9.228l-.021 14.086l14.085-.022l9.228-9.228z");
}
</style><path class="k8mf6ccnk"/>`,
		"fallback": "arcticons:amd-link",
	});
}

export default Component;
