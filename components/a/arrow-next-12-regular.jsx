import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xn8j8l_kz {
  fill: currentColor;
  d: path("M2.646 2.854a.5.5 0 1 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L5.793 6zM10 2.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0z");
}
</style><path class="xn8j8l_kz"/>`,
		"fallback": "fluent:arrow-next-12-regular",
	});
}

export default Component;
