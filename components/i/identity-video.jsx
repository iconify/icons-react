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
		"content": `<style>.maxbavjlq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.372 42.276L42.5 9.086l-3.587-3.362L11.372 35.09V20.736H5.5v21.54zM5.5 12.299h5.872v4.632H5.5z");
}
</style><path class="maxbavjlq"/>`,
		"fallback": "arcticons:identity-video",
	});
}

export default Component;
