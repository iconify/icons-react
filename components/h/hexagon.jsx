import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b6l8b8b4i {
  fill: currentColor;
  d: path("m6.8 21l-5.2-9l5.2-9h10.4l5.2 9l-5.2 9z");
}
</style><path class="b6l8b8b4i"/>`,
		"fallback": "material-symbols:hexagon",
	});
}

export default Component;
