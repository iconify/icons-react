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
		"content": `<style>.dviarkb8a {
  width: 41px;
  height: 17.872px;
  x: 3.5px;
  y: 15.629px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 8.936px;
  ry: 8.936px;
}
</style><rect class="dviarkb8a"/>`,
		"fallback": "arcticons:dynamic-island",
	});
}

export default Component;
