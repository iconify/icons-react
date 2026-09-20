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
		"content": `<style>.obkkldf8r {
  fill: currentColor;
  d: path("M10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5M6.5 10h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1m0 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1m0 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1M11 6.5V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5");
}
</style><path class="obkkldf8r"/>`,
		"fallback": "fluent:document-text-20-filled",
	});
}

export default Component;
