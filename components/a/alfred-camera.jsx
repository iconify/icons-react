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
		"content": `<style>.j82aexbnj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.559 28.373V43.5l16.186-7.562Z");
}

.uzjrpzr2d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.745 35.938V20.302L24.019 4.5L8.255 20.302v15.633H23.56");
}
</style><path class="j82aexbnj"/><path class="uzjrpzr2d"/>`,
		"fallback": "arcticons:alfred-camera",
	});
}

export default Component;
