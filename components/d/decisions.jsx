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
		"content": `<style>.a2kt7mhhp {
  cx: 24px;
  cy: 32.97px;
  r: 1.8px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.tevoedc-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.2 33c-3.19 0-6.65 4.27-10.28 4.27S4.5 33.62 4.5 33.62M25.8 33c3.19 0 6.65 4.27 10.28 4.27s7.42-3.62 7.42-3.62");
}

.xj676kb9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 31.17v-4.65M6.64 19.43l8.67-8.67m27.73 0l-8.67 8.67l-3.83-3.83M24 15.09l-5.54 11.43h11.08zM6.64 10.76l8.67 8.67M24 34.77v.71");
}
</style><path class="tevoedc-q"/><circle class="a2kt7mhhp"/><path class="xj676kb9s"/>`,
		"fallback": "arcticons:decisions",
	});
}

export default Component;
