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
		"content": `<style>.ce0jczx8i {
  cx: 24px;
  cy: 23.064px;
  r: 3.564px;
}

.h0qgeuwow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z");
}

.k73kwlb0o {
  d: path("M30.873 33.5a6.873 6.873 0 1 0-13.746 0z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="h0qgeuwow"/><g class="y9tr6bcfx"><circle class="ce0jczx8i"/><path class="k73kwlb0o"/></g>`,
		"fallback": "arcticons:folder-shared",
	});
}

export default Component;
