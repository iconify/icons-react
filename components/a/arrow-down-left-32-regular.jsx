import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pqbn7cb2i {
  fill: currentColor;
  d: path("M17.004 28.996a1 1 0 1 0 0-2H6.418L28.707 4.707a1 1 0 0 0-1.414-1.414L5.003 25.582V14.996a1 1 0 1 0-2 0v13a1 1 0 0 0 1 1z");
}
</style><path class="pqbn7cb2i"/>`,
		"fallback": "fluent:arrow-down-left-32-regular",
	});
}

export default Component;
