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
		"content": `<style>.vpvy20bdq {
  fill: currentColor;
  d: path("M16.258 10.5a.75.75 0 0 0 0-1.5H7.77a.75.75 0 0 0 0 1.5zm0 4.5a.75.75 0 0 0 0-1.5H7.77a.75.75 0 0 0 0 1.5zM22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10M12 3.5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17");
}
</style><path class="vpvy20bdq"/>`,
		"fallback": "fluent:equal-circle-24-regular",
	});
}

export default Component;
