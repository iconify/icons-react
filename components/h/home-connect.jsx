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
		"content": `<style>.n-jp227gz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.392 19.38l-6.67-5.616a1.12 1.12 0 0 0-1.444 0l-6.67 5.615a1.68 1.68 0 0 0-.598 1.287v10.713a1.12 1.12 0 0 0 1.12 1.121h13.74a1.12 1.12 0 0 0 1.12-1.121V20.666a1.68 1.68 0 0 0-.598-1.287");
}

.snilc_6ez {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.302 33.464a21.513 21.513 0 1 0-9.838 9.838a2 2 0 0 1 1.317-.17l7.659 1.692a2 2 0 0 0 2.384-2.384l-1.691-7.659a2 2 0 0 1 .17-1.317");
}
</style><path class="snilc_6ez"/><path class="n-jp227gz"/>`,
		"fallback": "arcticons:home-connect",
	});
}

export default Component;
