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
		"content": `<style>.h0qgeuwow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z");
}

.qkdt_6blw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.853 26.638a3.286 3.286 0 0 0-3.276 3.276h0a3.286 3.286 0 0 0 3.276 3.277h2.13a3.286 3.286 0 0 0 3.277-3.277h0a3.286 3.286 0 0 0-3.277-3.276m.164 0a3.286 3.286 0 0 0 3.276-3.277h0a3.286 3.286 0 0 0-3.276-3.276h-2.13a3.286 3.286 0 0 0-3.277 3.276h0a3.286 3.286 0 0 0 3.277 3.277m-.164 0h2.294");
}
</style><path class="h0qgeuwow"/><path class="qkdt_6blw"/>`,
		"fallback": "arcticons:folder-8",
	});
}

export default Component;
