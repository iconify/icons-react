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
		"content": `<style>.i0thion7m {
  fill: currentColor;
  d: path("M16 7q-.425 0-.712-.288T15 6t.288-.712T16 5h4q.425 0 .713.288T21 6t-.288.713T20 7zm-4 11l-4.2 1.8q-1 .425-1.9-.162T5 17.975V5q0-.825.588-1.412T7 3h5.625q.45 0 .675.4t.025.825q-.175.425-.25.85T13 6q0 1.8 1.138 3.175T17 10.9q.3.05.538.063t.462.012q.425 0 .713.263T19 11.9v6.075q0 1.075-.9 1.663t-1.9.162z");
}
</style><path class="i0thion7m"/>`,
		"fallback": "material-symbols:bookmark-remove-rounded",
	});
}

export default Component;
