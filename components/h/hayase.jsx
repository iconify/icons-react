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
		"content": `<style>.mm7r6wbnv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 39.91V8.09l37 20.72v11.1L15.86 24.962v9.176zm37-17.02l-13.172-7.4L42.5 8.09z");
}
</style><path class="mm7r6wbnv"/>`,
		"fallback": "arcticons:hayase",
	});
}

export default Component;
