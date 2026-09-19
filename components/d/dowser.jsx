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
		"content": `<style>.j41oe0zuu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.03 30.787L18.456 17.213");
}

.v-axu8btf {
  width: 19.198px;
  height: 44.407px;
  x: 15.644px;
  y: 1.797px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 9.599px;
}
</style><rect transform="rotate(45 25.243 24)" class="v-axu8btf"/><path class="j41oe0zuu"/>`,
		"fallback": "arcticons:dowser",
	});
}

export default Component;
