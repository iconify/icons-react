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
		"content": `<style>.ao5vhdg0m {
  fill: currentColor;
  d: path("M5 3h14a3 3 0 0 1 1 5.829V18a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V8.829A3.001 3.001 0 0 1 5 3m1 6v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9Zm5 4.414l-1.293 1.293a.999.999 0 1 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3a.999.999 0 1 1-1.414 1.414L13 13.414V17a1 1 0 0 1-2 0Z");
}
</style><path class="ao5vhdg0m"/>`,
		"fallback": "coolicons:archive-restore-fill",
	});
}

export default Component;
