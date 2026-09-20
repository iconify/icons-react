import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.vxkwxhj6j {
  fill: currentColor;
  d: path("M40.139 12.871a1.25 1.25 0 0 1-.01 1.768l-22.25 22a1.25 1.25 0 0 1-1.75.007l-9.25-9a1.25 1.25 0 1 1 1.743-1.792L16.993 34l21.378-21.138a1.25 1.25 0 0 1 1.768.01");
}
</style><path class="vxkwxhj6j"/>`,
		"fallback": "fluent:checkmark-48-regular",
	});
}

export default Component;
