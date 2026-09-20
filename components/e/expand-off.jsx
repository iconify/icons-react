import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bod25nbdw {
  d: path("M5.707 15.707a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z");
}

.cf7y0id-t {
  d: path("M6 15a1 1 0 1 1-2 0v-4a1 1 0 1 1 2 0zm5.707-5.293a1 1 0 0 1-1.414-1.414l4-4a1 1 0 1 1 1.414 1.414z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.t_21e8bxb {
  d: path("M16 9a1 1 0 1 1-2 0V5a1 1 0 1 1 2 0z");
}

.xoen9sl1a {
  d: path("M5 16a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z");
}

.ye3p08btn {
  d: path("M11 6a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2zM1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path class="bod25nbdw"/><path class="xoen9sl1a"/><path class="cf7y0id-t"/><path class="t_21e8bxb"/><path class="ye3p08btn"/></g>`,
		"fallback": "pepicons-pop:expand-off",
	});
}

export default Component;
