import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.kphejjb8s {
  fill-rule: evenodd;
  d: path("M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13");
}

.q5jsyf-yl {
  d: path("M5.5 11a1 1 0 0 1 0-2h15a1 1 0 1 1 0 2zm0 3.25a1 1 0 1 1 0-2h15a1 1 0 1 1 0 2zm0 3.25a1 1 0 1 1 0-2h15a1 1 0 1 1 0 2z");
}
</style><g class="cuyn6tgcc"><path class="q5jsyf-yl"/><path clip-rule="evenodd" class="kphejjb8s"/></g>`,
		"fallback": "pepicons-pop:grab-handle-circle",
	});
}

export default Component;
