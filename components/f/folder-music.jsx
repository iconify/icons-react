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
		"content": `<style>.dcwp7lbof {
  d: path("M21.911 30.728V21.57l7.722-1.07v8.01");
}

.ekh_ecbet {
  cx: 27.861px;
  cy: 28.51px;
  r: 1.772px;
}

.h0qgeuwow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z");
}

.x7-u11bcs {
  cx: 20.139px;
  cy: 30.728px;
  r: 1.772px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="h0qgeuwow"/><g class="y9tr6bcfx"><path class="dcwp7lbof"/><circle class="x7-u11bcs"/><circle class="ekh_ecbet"/></g>`,
		"fallback": "arcticons:folder-music",
	});
}

export default Component;
