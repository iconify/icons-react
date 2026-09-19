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
		"content": `<style>.fvtp0mbdl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.724 12.187c2.539 2.72 7.338 7.616 1.836 12.472m-5.891 10.318c-1.006 2.83-2.572 6.815-6.419 8.523");
}

.jk68md4-c {
  cx: 24px;
  cy: 19.745px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 16.091px;
  ry: 15.245px;
}
</style><ellipse class="jk68md4-c"/><path class="fvtp0mbdl"/>`,
		"fallback": "arcticons:huawei-meetime",
	});
}

export default Component;
