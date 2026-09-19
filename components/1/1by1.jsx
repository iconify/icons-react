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
		"content": `<style>.dh1e0cciz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.496 40.331S38.607 32.791 43.5 24C38.607 15.208 27.496 7.668 27.496 7.668zM7.634 19.986H4.5v-8.828s7.313-3.49 12.993-3.49l-.01 32.664H7.634Z");
}
</style><path class="dh1e0cciz"/>`,
		"fallback": "arcticons:1by1",
	});
}

export default Component;
