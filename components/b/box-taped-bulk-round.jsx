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

.ekch216kj {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M22 7.684v8.629a3 3 0 0 1-1.672 2.69l-7 3.456a3 3 0 0 1-1.312.31h-.032a3 3 0 0 1-1.312-.31l-7-3.456A3 3 0 0 1 2 16.313V7.687c0-1.141.648-2.184 1.672-2.69l2.699-1.332L16.5 8.667l2.258-1.116L8.629 2.549l2.043-1.008a3 3 0 0 1 1.312-.31h.032c.456.002.904.108 1.312.31l7 3.456l.002.001A3 3 0 0 1 22 7.684");
}

.svwgqnbny {
  d: path("m12 9.774l8.237-4.068a1 1 0 1 1 .886 1.793L13 11.51v10.259a1 1 0 1 1-2 0V11.51L2.877 7.499a1 1 0 0 1 .886-1.793Z");
}
</style><g class="cuyn6tgcc"><path class="ekch216kj"/><path class="svwgqnbny"/></g>`,
		"fallback": "coolicons:box-taped-bulk-round",
	});
}

export default Component;
