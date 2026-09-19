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
		"content": `<style>.ntz-uxbhu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.657 10.5v-6h-6.5v6m0 13v20h6.5v-20M35 10.5H6v13h29l7-6.5z");
}
</style><path class="ntz-uxbhu"/>`,
		"fallback": "arcticons:hikar",
	});
}

export default Component;
