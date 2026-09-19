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
		"content": `<style>.bt53h3brh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 26.6h37m-37 4.483h37");
}

.t6rr1vq9v {
  width: 37px;
  height: 34.132px;
  x: 5.5px;
  y: 6.934px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><rect class="t6rr1vq9v"/><path class="bt53h3brh"/>`,
		"fallback": "arcticons:huawei-wallet",
	});
}

export default Component;
