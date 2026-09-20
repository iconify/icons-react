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
		"content": `<style>.tjix63i5n {
  fill: currentColor;
  d: path("M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m3.854 9.354l2-2a.5.5 0 0 0-.708-.708L5 11.293V6.5a.5.5 0 0 0-1 0v4.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0M8.5 6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z");
}
</style><path class="tjix63i5n"/>`,
		"fallback": "fluent:arrow-expand-all-16-regular",
	});
}

export default Component;
