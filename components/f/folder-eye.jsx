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
		"content": `<style>.h0axd7cyj {
  d: path("M24 20.623c-3.905 0-7.292 2.2-9 5.427a10.176 10.176 0 0 0 18 0a10.18 10.18 0 0 0-9-5.427");
}

.h0qgeuwow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z");
}

.qa823j8wi {
  cx: 24px;
  cy: 26.05px;
  r: 3.253px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="h0qgeuwow"/><g class="y9tr6bcfx"><path class="h0axd7cyj"/><circle class="qa823j8wi"/></g>`,
		"fallback": "arcticons:folder-eye",
	});
}

export default Component;
