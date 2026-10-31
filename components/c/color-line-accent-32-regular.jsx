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
		"content": `<style>.fpm4pkb8a {
  fill: currentColor;
  d: path("M25.5 21a2.5 2.5 0 0 1 2.5 2.5v2a2.5 2.5 0 0 1-2.5 2.5h-19A2.5 2.5 0 0 1 4 25.5v-2a2.5 2.5 0 0 1 1.509-2.296a2.5 2.5 0 0 0 3.053 2.232l5.94-1.37A4.5 4.5 0 0 0 16.526 21z");
}
</style><path class="fpm4pkb8a"/>`,
		"fallback": "fluent:color-line-accent-32-regular",
	});
}

export default Component;
