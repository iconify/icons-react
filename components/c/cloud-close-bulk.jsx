import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

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

.g6ptozzor {
  d: path("m12 11.586l1.293-1.293a.999.999 0 1 1 1.414 1.414L13.414 13l1.293 1.293a.999.999 0 1 1-1.414 1.414L12 14.414l-1.293 1.293a.999.999 0 1 1-1.414-1.414L10.586 13l-1.293-1.293a.999.999 0 1 1 1.414-1.414Z");
}

.qq7y_sbgc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7 20a6 6 0 0 1-.74-11.955C6.794 6.596 7.715 5.283 9 4.408a6.17 6.17 0 0 1 4.398-1.022a6 6 0 0 1 2.151.755c2.147 1.246 3.217 3.547 3.415 5.951A5.002 5.002 0 0 1 18 20Z");
}
</style><g class="cuyn6tgcc"><path class="qq7y_sbgc"/><path class="g6ptozzor"/></g>`,
		"fallback": "coolicons:cloud-close-bulk",
	});
}

export default Component;
