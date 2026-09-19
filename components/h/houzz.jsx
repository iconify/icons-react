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
		"content": `<style>.o-frx9b2q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.423 5.5v37H19.86V30.845h8.282V42.5h12.436V21.487l-24.904-7.122V5.5z");
}
</style><path class="o-frx9b2q"/>`,
		"fallback": "arcticons:houzz",
	});
}

export default Component;
