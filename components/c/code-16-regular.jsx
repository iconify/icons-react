import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qb8m-j4gc {
  fill: currentColor;
  d: path("M9.803 3.043a.5.5 0 0 1 .254.66l-4 9a.5.5 0 0 1-.914-.406l4-9a.5.5 0 0 1 .66-.254m-5.47 2.333a.5.5 0 0 1 .04.706L2.67 8l1.705 1.918a.5.5 0 1 1-.748.664l-2-2.25a.5.5 0 0 1 0-.664l2-2.25a.5.5 0 0 1 .706-.042m7.335 0a.5.5 0 0 1 .706.042l2 2.25a.5.5 0 0 1 0 .664l-2 2.25a.5.5 0 1 1-.748-.664L13.331 8l-1.705-1.918a.5.5 0 0 1 .042-.706");
}
</style><path class="qb8m-j4gc"/>`,
		"fallback": "fluent:code-16-regular",
	});
}

export default Component;
