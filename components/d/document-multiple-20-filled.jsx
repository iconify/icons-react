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
		"content": `<style>.euii4r9qq {
  fill: currentColor;
  d: path("M9 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5v11A1.5 1.5 0 0 0 5.5 16h8a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 9 6.5m1 0V2.25L14.75 7H10.5a.5.5 0 0 1-.5-.5M17 9a1 1 0 0 0-1-1v6a3 3 0 0 1-3 3H6a1 1 0 0 0 1 1h6.06A3.94 3.94 0 0 0 17 14.06z");
}
</style><path class="euii4r9qq"/>`,
		"fallback": "fluent:document-multiple-20-filled",
	});
}

export default Component;
