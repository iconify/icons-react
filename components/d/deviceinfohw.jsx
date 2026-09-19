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
		"content": `<style>.lwl9mkbfs {
  width: 21.663px;
  height: 39px;
  x: 13.168px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}

.y66l7ob0d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.168 38.742h21.664m0-29.484H13.168m10.832 0v29.484M27.416 13.5h4v4h-4zm0 8.5h4v4h-4zm0 8.5h4v4h-4zm4 2h3.416m-7.416-17H24m5.416 2V22m0 4v4.5");
}
</style><rect class="lwl9mkbfs"/><path class="y66l7ob0d"/>`,
		"fallback": "arcticons:deviceinfohw",
	});
}

export default Component;
