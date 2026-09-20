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
		"content": `<style>.o32w91kio {
  fill: currentColor;
  d: path("M4 17h16v-6H4zm14.063-1.937q.437-.438.437-1.063t-.437-1.062T17 12.5t-1.062.438T15.5 14t.438 1.063T17 15.5t1.063-.437M22 9h-2.825l-2-2H6.825l-2 2H2l4-4h12zM2 19V9h20v10z");
}
</style><path class="o32w91kio"/>`,
		"fallback": "material-symbols:hard-drive-outline-sharp",
	});
}

export default Component;
