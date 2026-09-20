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
		"content": `<style>.eg58nnqmc {
  fill: currentColor;
  d: path("M7.52 14.692h.98l1.508-4.469v-.915H6.173v.884h2.88zm3.634 0h.884v-2.365l2.289 2.365h1.212l-2.635-2.73l2.635-2.654h-1.173l-2.327 2.327V9.308h-.885zm5.577-.807h.769v-1.5H19v-.77h-1.5v-1.5h-.77v1.5h-1.5v.77h1.5zM4 20V4h16v16z");
}
</style><path class="eg58nnqmc"/>`,
		"fallback": "material-symbols-light:7k-plus-sharp",
	});
}

export default Component;
