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
</style><g class="cuyn6tgcc"><path class="au0irbcan"/><path class="nb4sj2weg"/></g>`,
		"fallback": "pepicons-pop:angle-left",
	});
}

export default Component;
