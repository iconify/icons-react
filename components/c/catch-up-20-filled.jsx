import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.nl-05bbcy {
  fill: currentColor;
  d: path("M7.671 7.144a.25.25 0 0 1 .46.018l2.333 6.206c.545 1.448 2.564 1.529 3.222.128l1.223-2.603a.25.25 0 0 1 .226-.143H16.2a1.5 1.5 0 1 0 .001-1.5h-1.066a1.75 1.75 0 0 0-1.584 1.006l-1.222 2.602a.25.25 0 0 1-.46-.018L9.535 6.634c-.545-1.448-2.564-1.529-3.222-.128l-1.223 2.6a.25.25 0 0 1-.226.144H3.8a1.5 1.5 0 1 0 0 1.5h1.066A1.75 1.75 0 0 0 6.45 9.744z");
}
</style><path class="nl-05bbcy"/>`,
		"fallback": "fluent:catch-up-20-filled",
	});
}

export default Component;
