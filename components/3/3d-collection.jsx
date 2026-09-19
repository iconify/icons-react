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
		"content": `<style>.itgjopbhc {
  d: path("M41.007 14.801L24 4.5L6.993 14.801M24 43.5l17.007-10.098v-18.6l-9.567 4.627v8.659l-5.846 3.188v5.315L24 37.594l-1.594-1.003v-5.315l-5.846-3.188v-8.659l-9.567-4.628v18.601z");
}

.j08680byf {
  d: path("M16.56 19.43L24 14.8l7.44 4.628");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="j08680byf"/><path class="itgjopbhc"/></g>`,
		"fallback": "arcticons:3d-collection",
	});
}

export default Component;
