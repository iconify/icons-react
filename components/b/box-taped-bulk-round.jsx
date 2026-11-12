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

.jad6bkbgv {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M22 7.687v8.626a3 3 0 0 1-1.672 2.69l-7 3.456a3 3 0 0 1-2.656 0l-7-3.456A3 3 0 0 1 2 16.313V7.687c0-1.141.648-2.184 1.672-2.69l7-3.456a3 3 0 0 1 2.656 0l7 3.456A3 3 0 0 1 22 7.687");
}

.ogp26tbus {
  d: path("m17.629 6.994l2.608-1.288a1 1 0 1 1 .886 1.793L18.08 9.002l-.016.008L13 11.51v10.259a1 1 0 1 1-2 0V11.51L2.877 7.499a1 1 0 0 1 .886-1.793L12 9.774l3.371-1.665l-7.185-3.548a.999.999 0 1 1 .886-1.793Z");
}
</style><g class="cuyn6tgcc"><path class="jad6bkbgv"/><path class="ogp26tbus"/></g>`,
		"fallback": "coolicons:box-taped-bulk-round",
	});
}

export default Component;
