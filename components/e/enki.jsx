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
		"content": `<style>.hqd25e92l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.337 21.878L4.5 25.592l5.837 3.714m27.326-7.428l5.837 3.714l-5.837 3.714m-8.224 3.184l5.837-16.98M24.728 29.07a4.96 4.96 0 0 1-4.31 2.502h0a4.96 4.96 0 0 1-4.96-4.96v-3.224a4.96 4.96 0 0 1 4.96-4.96h0a4.96 4.96 0 0 1 4.96 4.96V25h-9.92");
}
</style><path class="hqd25e92l"/>`,
		"fallback": "arcticons:enki",
	});
}

export default Component;
