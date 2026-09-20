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
		"content": `<style>.au0irbcan {
  d: path("M6.732 10.64a1 1 0 1 1 1.536-1.28l5 6a1 1 0 1 1-1.536 1.28z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.nb4sj2weg {
  d: path("M8.268 10.64a1 1 0 1 1-1.536-1.28l5-6a1 1 0 1 1 1.536 1.28z");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path class="au0irbcan"/><path class="nb4sj2weg"/><path class="xedf9ccsf"/></g>`,
		"fallback": "pepicons-pop:angle-left-off",
	});
}

export default Component;
