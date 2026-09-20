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
		"content": `<style>.yw50fhd4e {
  fill: currentColor;
  d: path("M12 2.004c5.523 0 10 4.477 10 10s-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10m0 1.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17m0 9.495a2.25 2.25 0 1 1 0 4.5a2.25 2.25 0 0 1 0-4.5M9 8.75a1.25 1.25 0 1 1 0 2.499A1.25 1.25 0 0 1 9 8.75m6 0a1.25 1.25 0 1 1 0 2.499a1.25 1.25 0 0 1 0-2.499");
}
</style><path class="yw50fhd4e"/>`,
		"fallback": "fluent:emoji-surprise-24-regular",
	});
}

export default Component;
