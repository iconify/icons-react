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
		"content": `<style>.jk61qpbiq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.987 11.342V42.5h31.158");
}

.p_j9a5k4n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.855 5.5h31.158v31.158H10.855zm4.869 5.842h21.42m-21.42 5.842h21.42m-21.42 5.842h21.42m-21.42 5.842h11.684");
}
</style><path class="jk61qpbiq"/><path class="p_j9a5k4n"/>`,
		"fallback": "arcticons:doi-to-scihub",
	});
}

export default Component;
