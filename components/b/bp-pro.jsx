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
		"content": `<style>.l5dlw1yel {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.817 5.5L5.698 16.015V42.5h26.485l10.119-10.515V5.5zM5.698 24.87h15.14m-7.57-7.57v15.14M23.447 17.3l11.799 15.14m0-15.14L23.447 32.44");
}
</style><path class="l5dlw1yel"/>`,
		"fallback": "arcticons:bp-pro",
	});
}

export default Component;
