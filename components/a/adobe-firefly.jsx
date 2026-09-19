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

.uqql2gb_d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.629 21.075V33m-12.772-9h5.85m-5.85 9V15h9m3.984 1.359l1.302.078l-.719-1.088l.079-1.302l-1.089.718l-1.302-.078l.719 1.089l-.078 1.302z");
}
</style><rect class="j3s9ivbxi"/><path class="uqql2gb_d"/>`,
		"fallback": "arcticons:adobe-firefly",
	});
}

export default Component;
