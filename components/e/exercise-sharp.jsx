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
		"content": `<style>.szcscmbdr {
  fill: currentColor;
  d: path("m19.475 9.294l-4.8-4.8l1.177-1.177l4.804 4.849zM8.096 20.704l-4.819-4.781l1.242-1.242l4.8 4.8zm3.479-.227l-8.052-8.052L6.136 9.8l2.435 2.454l3.688-3.688l-2.448-2.43l2.614-2.663l8.102 8.102l-2.664 2.614l-2.429-2.449l-3.688 3.689l2.454 2.434z");
}
</style><path class="szcscmbdr"/>`,
		"fallback": "material-symbols-light:exercise-sharp",
	});
}

export default Component;
