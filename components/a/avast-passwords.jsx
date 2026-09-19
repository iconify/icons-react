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
		"content": `<style>.axgyiobon {
  cx: 17.913px;
  cy: 17.79px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.747px;
  ry: 1.76px;
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ebrge6b7k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23 27.226l2.126 2.057h2.635v2.827h2.79v2.751h4.189v-3.96l-7.52-7.974l.056-.106a7.32 7.32 0 0 0-3.017-8.594a7.15 7.15 0 0 0-8.957 1.116a7.34 7.34 0 0 0-.86 9.078a7.17 7.17 0 0 0 8.585 2.813Z");
}
</style><circle class="cpk0fnbgt"/><path class="ebrge6b7k"/><ellipse class="axgyiobon"/>`,
		"fallback": "arcticons:avast-passwords",
	});
}

export default Component;
