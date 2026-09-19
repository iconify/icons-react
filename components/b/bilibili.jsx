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
		"content": `<style>.wdpd2-bzu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.483 4.5l2.925 4.903m-7.149 12.282l6.824-2.726M30.517 4.5l-2.925 4.903m7.149 12.282l-6.824-2.726m1.137 5.957c-.582 1.472-1.15 2.54-2.527 2.54c-1.074 0-1.666-.498-2.527-1.836c-.861 1.338-1.453 1.836-2.527 1.836c-1.377 0-1.945-1.068-2.527-2.54m7.022 11.045v2.033s8.691.29 8.691 5.506H13.341c0-5.217 8.691-5.506 8.691-5.506v-2.033");
}

.z7w0ulbte {
  width: 35.733px;
  height: 26.558px;
  x: 6.134px;
  y: 9.403px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 6.753px;
}
</style><rect class="z7w0ulbte"/><path class="wdpd2-bzu"/>`,
		"fallback": "arcticons:bilibili",
	});
}

export default Component;
