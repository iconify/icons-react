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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.p4yi1ebmm {
  fill-rule: evenodd;
  d: path("M10 2.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M.5 10a9.5 9.5 0 1 1 19 0a9.5 9.5 0 0 1-19 0");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="p4yi1ebmm"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:circle-big-off",
	});
}

export default Component;
