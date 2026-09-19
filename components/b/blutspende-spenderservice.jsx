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
		"content": `<style>.lf-73mb_u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.5 17.5h-9a2 2 0 0 1-2-2v-9a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v9a2 2 0 0 1-2 2h-9a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h9a2 2 0 0 1 2 2v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-9a2 2 0 0 1 2-2h9a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1");
}
</style><path class="lf-73mb_u"/>`,
		"fallback": "arcticons:blutspende-spenderservice",
	});
}

export default Component;
