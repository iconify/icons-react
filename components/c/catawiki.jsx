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
		"content": `<style>.akbn5joor {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.677 42.5c-21.333-4.206-21.333-32.664 0-37h12.617l.03 37z");
}
</style><path class="akbn5joor"/>`,
		"fallback": "arcticons:catawiki",
	});
}

export default Component;
