import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rpleesblm {
  fill: currentColor;
  d: path("M7 3a4 4 0 0 1 3.874 3H22.5a5.5 5.5 0 1 1 0 11h-13a3.5 3.5 0 1 0 0 7h15.086l-2.293-2.293a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L24.586 26H9.5a5.5 5.5 0 1 1 0-11h13a3.5 3.5 0 1 0 0-7H10.874A4.002 4.002 0 0 1 3 7a4 4 0 0 1 4-4m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4");
}
</style><path class="rpleesblm"/>`,
		"fallback": "fluent:flow-arrow-32-regular",
	});
}

export default Component;
