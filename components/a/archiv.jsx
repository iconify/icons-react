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
		"content": `<style>.bowgbkbam {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.584 40.757L24 25.752l-6.585 15.005z");
}

.gz5qwwbxc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 40.76L27.325 7.24h-6.65L5.5 40.76h6.55L24 14.365l11.95 26.397z");
}
</style><path class="bowgbkbam"/><path class="gz5qwwbxc"/>`,
		"fallback": "arcticons:archiv",
	});
}

export default Component;
