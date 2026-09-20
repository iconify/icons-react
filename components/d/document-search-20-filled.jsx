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
		"content": `<style>.au_m59-ik {
  fill: currentColor;
  d: path("M10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v5.756a4.5 4.5 0 0 1 5.561 6.184l2 2c.163.163.281.355.354.56H14.5a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5m1 0V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5M5.5 17c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 5.5 17m0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5");
}
</style><path class="au_m59-ik"/>`,
		"fallback": "fluent:document-search-20-filled",
	});
}

export default Component;
