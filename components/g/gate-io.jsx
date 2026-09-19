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
		"content": `<style>.cyl411b8h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36 24h9.5A21.499 21.499 0 0 1 8.798 39.202A21.5 21.5 0 0 1 24 2.5V24zV12H24a12.001 12.001 0 0 0-8.485 20.485A12 12 0 0 0 35.999 24");
}
</style><path class="cyl411b8h"/>`,
		"fallback": "arcticons:gate-io",
	});
}

export default Component;
