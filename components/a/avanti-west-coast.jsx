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
		"content": `<style>.rt3c25ite {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.749 30.294L39.499 43.5L24 4.5zM14.903 43.5L11.7 35.512L8.5 43.5m1.067-2.663h4.268");
}
</style><path class="rt3c25ite"/>`,
		"fallback": "arcticons:avanti-west-coast",
	});
}

export default Component;
