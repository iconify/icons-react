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
		"content": `<style>.bc0ft1biw {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M12 21H5a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v13a1 1 0 0 1-1 1");
}

.cuyn6tgcc {
  fill: currentColor;
}

.uknh1s19v {
  d: path("m16.434 10.044l.004.004q.14.116.269.245l2 2C19.665 13.251 20 14.687 20 16v3h1a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h8v-8c0-.265.105-.52.293-.707v-.001a3.827 3.827 0 0 1 5.141-.248M13 19h5v-3c0-.739-.147-1.733-.707-2.293l-2-2A1.83 1.83 0 0 0 13 11.468Z");
}
</style><g class="cuyn6tgcc"><path class="bc0ft1biw"/><path class="uknh1s19v"/></g>`,
		"fallback": "coolicons:building-2-bulk-round",
	});
}

export default Component;
