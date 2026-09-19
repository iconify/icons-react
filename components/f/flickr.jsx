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
		"content": `<style>.eh81cib2m {
  cx: 34.14px;
  cy: 24px;
  r: 9.36px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ubttozbrj {
  cx: 13.86px;
  cy: 24px;
  r: 9.36px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="eh81cib2m"/><circle class="ubttozbrj"/>`,
		"fallback": "arcticons:flickr",
	});
}

export default Component;
