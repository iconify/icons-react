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
		"content": `<style>.a9e1jkb3x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 6L6.394 36.494h35.212l-14.6-25.288L9.227 42h29.546L27.229 22.004");
}
</style><path class="a9e1jkb3x"/>`,
		"fallback": "arcticons:amboss",
	});
}

export default Component;
