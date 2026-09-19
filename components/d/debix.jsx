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
		"content": `<style>.d9m5lacjb {
  width: 29.981px;
  height: 19.711px;
  x: 4.5px;
  y: 19.765px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3px;
  ry: 3px;
}

.ygmweqbak {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.005 13.018h3.987v3.987h-3.987zM8.988 32.762h13.553M8.988 35.747h6.821");
}

.zta7oy6hj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.988 24.253h3.987v3.987H8.988zm25.491 3.997H40.5c1.65 0 3-1.35 3-3V11.523c0-1.65-1.35-3-3-3H16.52c-1.65 0-3 1.35-3 3v8.243");
}
</style><rect class="d9m5lacjb"/><path class="zta7oy6hj"/><path class="ygmweqbak"/>`,
		"fallback": "arcticons:debix",
	});
}

export default Component;
