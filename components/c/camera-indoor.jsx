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
		"content": `<style>.oy8tqgj9r {
  fill: currentColor;
  d: path("M4 21V9l8-6l8 6v12zm5-4h4q.425 0 .713-.288T14 16v-1l2 1.05v-4.1L14 13v-1q0-.425-.288-.712T13 11H9q-.425 0-.712.288T8 12v4q0 .425.288.713T9 17");
}
</style><path class="oy8tqgj9r"/>`,
		"fallback": "material-symbols:camera-indoor",
	});
}

export default Component;
