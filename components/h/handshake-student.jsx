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
		"content": `<style>.fjh07bb7n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.2 4.5l-6.5 39h7.8l1.803-10.819l7.548-6.292L24 43.5h7.8l6.5-39h-7.8l-2.35 14.09l-7.548 6.291L24 4.5z");
}
</style><path class="fjh07bb7n"/>`,
		"fallback": "arcticons:handshake-student",
	});
}

export default Component;
