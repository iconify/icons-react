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
		"content": `<style>.am6gj6bii {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.431 35.034V12.966M8.5 7.5l33 16.5l-33 16.5");
}
</style><path class="am6gj6bii"/>`,
		"fallback": "arcticons:arttu",
	});
}

export default Component;
