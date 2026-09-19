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
		"content": `<style>.c_0l7fbsr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m36.01 20.249l.98 2.661l3.01.048l-2.403 1.694l.88 2.69l-2.467-1.613l-2.466 1.613l.88-2.69l-2.403-1.694l3.009-.048zm-24.02 0l.98 2.661l3.009.048l-2.403 1.694l.88 2.69l-2.466-1.613l-2.467 1.613l.88-2.69L8 22.958l3.01-.048zM17.774 24h12.457m-9.181-7.559v15.118m5.905-15.118v15.118");
}

.j3s9ivbxi {
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
</style><rect class="j3s9ivbxi"/><path class="c_0l7fbsr"/>`,
		"fallback": "arcticons:hesburger",
	});
}

export default Component;
