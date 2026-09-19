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
		"content": `<style>.vjr1nfd0t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.39 27.61l-1.507 1.508m0 3.77L9.271 42.5L5.5 38.729l9.612-9.612l3.771.001zm8.007-18.435h1.619c1.48 0 2.681 1.203 2.681 2.687s-1.2 2.686-2.681 2.686l2.681 2.625m-2.68-7.998h3.68m-5.3 2.7h5.3");
}

.x46hm6qgx {
  cx: 29.548px;
  cy: 18.452px;
  r: 12.952px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="x46hm6qgx"/><path class="vjr1nfd0t"/>`,
		"fallback": "arcticons:comparify",
	});
}

export default Component;
