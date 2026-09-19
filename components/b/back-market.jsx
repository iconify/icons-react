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
		"content": `<style>.d4_jujj7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 7.857L26.357 24L42.5 40.143M21.643 7.857L5.5 24l16.143 16.143");
}
</style><path class="d4_jujj7p"/>`,
		"fallback": "arcticons:back-market",
	});
}

export default Component;
