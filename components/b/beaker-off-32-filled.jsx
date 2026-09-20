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
		"content": `<style>.corlsbcsz {
  fill: currentColor;
  d: path("m26.329 27.743l1.964 1.964a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 0 0-1.414 1.414l9.705 9.705v.026a4 4 0 0 1-.712 2.277L9.704 18h6.882l2 2H8.32l-2.744 3.962C4.102 26.092 5.626 29 8.216 29H23.78c1.083 0 1.98-.51 2.549-1.257M21.538 18l-9.54-9.54V5h-1a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2h-1v8.438a4 4 0 0 0 .71 2.277L22.292 18z");
}
</style><path class="corlsbcsz"/>`,
		"fallback": "fluent:beaker-off-32-filled",
	});
}

export default Component;
