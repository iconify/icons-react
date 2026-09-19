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
		"content": `<style>.jmghjrbrd {
  cx: 30.244px;
  cy: 16.176px;
  r: 1.705px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yp5wmx6nl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.28 7.896L6.436 27.375L27.72 42.5l13.843-19.48L37.999 5.5zm7.191 12.524l-6.863 9.657");
}
</style><path class="yp5wmx6nl"/><circle class="jmghjrbrd"/>`,
		"fallback": "arcticons:huawei-tips",
	});
}

export default Component;
