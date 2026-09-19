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
		"content": `<style>.ai38n8b3r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.743 43.5a1.97 1.97 0 0 0 1.839-1.266L27.277 6.399A2.95 2.95 0 0 1 30.035 4.5h9.943a1.97 1.97 0 0 0-1.839 1.266L24.444 41.601a2.95 2.95 0 0 1-2.758 1.899z");
}

.exhlnnb8b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.956 33.404L14.97 14.17a1 1 0 0 0-1.895-.332L8.39 23.526a4 4 0 0 0-.388 2.037l1.187 16.012a2 2 0 0 0 1.999 1.925h.555");
}
</style><path class="ai38n8b3r"/><path class="exhlnnb8b"/>`,
		"fallback": "arcticons:dailydozen",
	});
}

export default Component;
