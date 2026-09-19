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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yk2dx8b3y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m26.303 27l-3.326 12.41q.51.061 1.023.09A15.5 15.5 0 0 0 39.18 27zm4.529-16.906L27.91 21h11.277a15.5 15.5 0 0 0-8.355-10.906M24 8.5C15.44 8.5 8.5 15.44 8.5 24a15.5 15.5 0 0 0 8.682 13.857l7.855-29.32A16 16 0 0 0 24 8.5");
}
</style><circle class="cpk0fnbgt"/><path class="yk2dx8b3y"/>`,
		"fallback": "arcticons:apteka-april",
	});
}

export default Component;
