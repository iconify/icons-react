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

.f99965bch {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 2h14a3 3 0 1 1 0 6H5a3 3 0 1 1 0-6m3 12a4 4 0 1 1 8 0a4 4 0 0 1-8 0");
}

.uvv_bhb9z {
  d: path("M18 14V7a1 1 0 0 1 2 0v7a8 8 0 0 1-16 0V7a1 1 0 0 1 2 0v7a6 6 0 1 0 12 0M8 14a4 4 0 1 1 8 0a4 4 0 0 1-8 0m2 0a2 2 0 1 0 3.999.001A2 2 0 0 0 10 14m2-1h.01a1 1 0 0 1 0 2H12a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="f99965bch"/><path class="uvv_bhb9z"/></g>`,
		"fallback": "coolicons:cctv-bulk",
	});
}

export default Component;
