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
		"content": `<style>.jsjytabeg {
  fill: currentColor;
  d: path("M14.938 21.063Q14.5 20.625 14.5 20t.438-1.062T16 18.5t1.063.438T17.5 20t-.437 1.063T16 21.5t-1.062-.437M8 21q-.825 0-1.412-.587T6 19V9q0-.825.588-1.412T8 7h1v14zm2.5 0V7H14V4q-.825 0-1.412-.587T12 2h4v15q-1.25 0-2.125.875T13 20q0 .275.038.513t.137.487z");
}
</style><path class="jsjytabeg"/>`,
		"fallback": "material-symbols:carry-on-bag",
	});
}

export default Component;
