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
		"content": `<style>.j3s9ivbxi {
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

.yyrekwmzg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.602 34l-5.195-12.507l-3.383 8.146h3.255L26.09 34H12.797l8.331-20h5.744l8.331 20z");
}
</style><rect class="j3s9ivbxi"/><path class="yyrekwmzg"/>`,
		"fallback": "arcticons:adobe-learning",
	});
}

export default Component;
