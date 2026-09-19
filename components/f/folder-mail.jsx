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
		"content": `<style>.h0qgeuwow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z");
}

.hy8kpd_du {
  width: 16px;
  height: 12px;
  x: 16px;
  y: 20.584px;
  rx: 2px;
  ry: 2px;
}

.wrziorbep {
  d: path("M29.913 22.745L24 26.696l-5.913-3.951");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="h0qgeuwow"/><g class="y9tr6bcfx"><rect class="hy8kpd_du"/><path class="wrziorbep"/></g>`,
		"fallback": "arcticons:folder-mail",
	});
}

export default Component;
