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
		"content": `<style>.jyajco2du {
  fill: currentColor;
  d: path("M12 4.5a7.5 7.5 0 1 0 7.419 6.392c-.067-.454.265-.892.724-.892c.37 0 .696.256.752.623Q21 11.297 21 12a9 9 0 1 1-3-6.708V4.25a.75.75 0 0 1 1.5 0v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1 0-1.5h1.35a7.47 7.47 0 0 0-5.1-2");
}
</style><path class="jyajco2du"/>`,
		"fallback": "fluent:arrow-clockwise-24-regular",
	});
}

export default Component;
