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
		"content": `<style>.dbdivj7xr {
  fill: currentColor;
  d: path("M6.42 8.116L4.576 6.285l.708-.72l1.842 1.843zm5.08-2.231V3.269h1v2.616zm6.092 2.23l-.719-.707l1.843-1.831l.707.708zM10 21v-4.423l-3-3V10h10v3.577l-3 3V21zm1-1h2v-3.844l3-3V11H8v2.156l3 3zm1-4.5");
}
</style><path class="dbdivj7xr"/>`,
		"fallback": "material-symbols-light:highlight-outline-sharp",
	});
}

export default Component;
