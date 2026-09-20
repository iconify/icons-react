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
		"content": `<style>.ndlajeb7d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.784 18.242V7.804a2.305 2.305 0 0 0-4.611 0v10.438m16.141 0V7.804a2.305 2.305 0 0 0-4.611 0v10.438");
}

.ql4ngu3kn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.318 18.242v8c0 7 5.678 12.675 12.682 12.675s12.682-5.675 12.682-12.676v-8z");
}

.wtw0c_nnm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.389 38.186l1.153 4.314h6.917l1.153-4.297");
}
</style><path class="ndlajeb7d"/><path class="ql4ngu3kn"/><path class="wtw0c_nnm"/>`,
		"fallback": "arcticons:emoji-electric-plug",
	});
}

export default Component;
