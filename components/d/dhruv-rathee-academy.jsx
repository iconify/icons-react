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
		"content": `<style>.voes2i1tk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 6.559L5.5 41.441h6.943l7.59-6.852h-5.364L24 17.036M24 6.56l18.5 34.882h-6.943l-7.59-6.852h5.364L24 17.036");
}
</style><path class="voes2i1tk"/>`,
		"fallback": "arcticons:dhruv-rathee-academy",
	});
}

export default Component;
