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
		"content": `<style>.obzv7q7nz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.961 30.014a12.44 12.44 0 0 0 1.539-6.013c0-6.904-5.597-12.5-12.5-12.5H4.5v25H14c1.823 0 3.555-.39 5.117-1.092");
}

.wait44bjk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M25.888 12.593A12.5 12.5 0 0 1 31 11.5A12.5 12.5 0 0 1 43.5 24A12.5 12.5 0 0 1 31 36.5A12.5 12.5 0 0 1 18.5 24a12.5 12.5 0 0 1 1.539-6.008");
}
</style><path class="wait44bjk"/><path class="obzv7q7nz"/>`,
		"fallback": "arcticons:douglas",
	});
}

export default Component;
