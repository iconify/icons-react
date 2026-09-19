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
		"content": `<style>.bzu6gcchc {
  cx: 24px;
  cy: 19.125px;
  r: 9.75px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ld3m-xblo {
  cx: 14.25px;
  cy: 28.875px;
  r: 9.75px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zc13o1bio {
  cx: 33.75px;
  cy: 28.875px;
  r: 9.75px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="ld3m-xblo"/><circle class="zc13o1bio"/><circle class="bzu6gcchc"/>`,
		"fallback": "arcticons:alliant",
	});
}

export default Component;
