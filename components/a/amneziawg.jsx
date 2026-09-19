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
		"content": `<style>.svwfz0hvg {
  cx: 24px;
  cy: 23px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 18.5px;
  ry: 16.5px;
}

.vscw7jbiu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m39.5 6.5l-10.878 35L24 22l-4.622 19.5L8.5 6.5");
}
</style><ellipse class="svwfz0hvg"/><path class="vscw7jbiu"/>`,
		"fallback": "arcticons:amneziawg",
	});
}

export default Component;
