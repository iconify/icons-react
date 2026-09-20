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
		"content": `<style>.b44qav-eg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5v28.363m-8.932-8.779L24 32.863l8.932-8.78m-5.687 16.228c0 1.761-1.453 3.189-3.245 3.189s-3.244-1.428-3.244-3.189s1.452-3.189 3.244-3.189s3.245 1.428 3.245 3.19");
}
</style><path class="b44qav-eg"/>`,
		"fallback": "arcticons:app-list",
	});
}

export default Component;
