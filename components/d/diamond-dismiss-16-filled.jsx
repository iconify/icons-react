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
		"content": `<style>.bdy8fks0x {
  fill: currentColor;
  d: path("M6.232 1.232a2.5 2.5 0 0 1 3.536 0l4.999 5a2.5 2.5 0 0 1 0 3.535l-5 5a2.5 2.5 0 0 1-3.535 0l-5-5a2.5 2.5 0 0 1 0-3.535zm4.374 4.164a.5.5 0 0 0-.707 0L8.002 7.292L6.106 5.396a.5.5 0 0 0-.707.707l1.896 1.896L5.4 9.896a.5.5 0 0 0 .707.707l1.896-1.897L9.9 10.603a.5.5 0 0 0 .707-.707L8.709 7.999l1.897-1.896a.5.5 0 0 0 0-.707");
}
</style><path class="bdy8fks0x"/>`,
		"fallback": "fluent:diamond-dismiss-16-filled",
	});
}

export default Component;
