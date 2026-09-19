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
		"content": `<style>.c3crd5bjb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.26 41.829c3.95-1.881 9.24-6.582 10.53-11.064c2.295-7.968-9.351-6.451-4.7 1.68c3.904 6.822 12.55 5.084 16.889-1.71c7.033-11.013 1.495-20.48-5.058-18.115c-7.278 2.628-3.928 16.562 5.718 17.023c5.5.263 11.862-6.125 11.862-6.125");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="j3s9ivbxi"/><path class="c3crd5bjb"/>`,
		"fallback": "arcticons:godaddy-studio",
	});
}

export default Component;
