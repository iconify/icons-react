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
		"content": `<style>.rcydelkar {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m36.793 17.717l-9.826-6.037v25.157l9.826-6.061");
}

.z5ejmvb0m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.123 44.5L6.75 34.25V13.898L24.123 3.5L41.25 13.898V34.25zM11.97 16.042v16.237m.038-8.119h9.246m0-13.638V37.65");
}
</style><path class="z5ejmvb0m"/><path class="rcydelkar"/>`,
		"fallback": "arcticons:http-custom",
	});
}

export default Component;
