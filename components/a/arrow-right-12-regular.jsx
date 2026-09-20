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
		"content": `<style>.fsukxpbem {
  fill: currentColor;
  d: path("M1.5 6a.5.5 0 0 1 .5-.5h6.793L6.146 2.854a.5.5 0 1 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L8.793 6.5H2a.5.5 0 0 1-.5-.5");
}
</style><path class="fsukxpbem"/>`,
		"fallback": "fluent:arrow-right-12-regular",
	});
}

export default Component;
