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
		"content": `<style>.zxdiw9fuz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.167 40.021L24 29.34l-6.166 10.681H5.5L24 7.978l18.5 32.043z");
}
</style><path class="zxdiw9fuz"/>`,
		"fallback": "arcticons:aoyama",
	});
}

export default Component;
