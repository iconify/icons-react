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
		"content": `<style>.a5zth5txm {
  fill: currentColor;
  d: path("M18 4a1 1 0 1 1 0 2H7.5A2.5 2.5 0 0 0 5 8.5v16A2.5 2.5 0 0 0 7.5 27h16a2.5 2.5 0 0 0 2.5-2.5V14a1 1 0 1 1 2 0v10.5a4.5 4.5 0 0 1-4.5 4.5h-16A4.5 4.5 0 0 1 3 24.5v-16A4.5 4.5 0 0 1 7.5 4zm9.292-.707a1 1 0 0 1 1.414 1.414L14.12 19.293L12 20l.707-2.122z");
}
</style><path class="a5zth5txm"/>`,
		"fallback": "fluent:compose-32-regular",
	});
}

export default Component;
