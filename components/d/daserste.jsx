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
		"content": `<style>.z77mre9ce {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M39.57 5.5v29.73L19.78 42.5V21.32L8.43 25.5V17Z");
}
</style><path class="z77mre9ce"/>`,
		"fallback": "arcticons:daserste",
	});
}

export default Component;
