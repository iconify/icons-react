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
		"content": `<style>.eutcjaczc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.624 31.346V16.653M13.6 24h4.686M13.6 31.346V16.653h7.21v1.172m-2.524 5.003v2.343m-3.515 6.175h-2.343m18.368 0h-2.343m5.948-13.521v-1.172h-9.553v1.172m-12.42-1.172H13.6");
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
</style><rect class="j3s9ivbxi"/><path class="eutcjaczc"/>`,
		"fallback": "arcticons:financial-times",
	});
}

export default Component;
