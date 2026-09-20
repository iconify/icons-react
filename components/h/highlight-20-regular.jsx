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
		"content": `<style>.kr0ybqfov {
  fill: currentColor;
  d: path("M3.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 1 0v4a1.5 1.5 0 0 1-1 1.415V9a2 2 0 0 1-2 2v2.073a2 2 0 0 1-1.106 1.789l-6.17 3.085A.5.5 0 0 1 6 17.5V11a2 2 0 0 1-2-2V7.915A1.5 1.5 0 0 1 3 6.5v-4a.5.5 0 0 1 .5-.5M5 8v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8zm2 3v5.691l5.447-2.724a1 1 0 0 0 .553-.894V11z");
}
</style><path class="kr0ybqfov"/>`,
		"fallback": "fluent:highlight-20-regular",
	});
}

export default Component;
