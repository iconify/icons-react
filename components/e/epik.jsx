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
		"content": `<style>.b3cnj-b5i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.485 24h7.307M14.25 4.5h19.5m0 39h-19.5m0-39v39");
}
</style><path class="b3cnj-b5i"/>`,
		"fallback": "arcticons:epik",
	});
}

export default Component;
