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

.gosf_ks8m {
  d: path("M9.236 9.832a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338m2.057 1.875a.999.999 0 1 0 1.414-1.414a.999.999 0 1 0-1.414 1.414m-3.9 7.347A5 5 0 0 1 17 21a1 1 0 0 1-2 0a3 3 0 1 0-6 0a1 1 0 0 1-2 0a4.9 4.9 0 0 1 .393-1.946");
}

.o3cwdvb-i {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16 22H8a5 5 0 0 1-5-5v-5.185a5 5 0 0 1 1.707-3.763l4-3.5a5 5 0 0 1 6.586 0l4 3.5A5 5 0 0 1 21 11.815V17a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22");
}
</style><g class="cuyn6tgcc"><path class="o3cwdvb-i"/><path class="gosf_ks8m"/></g>`,
		"fallback": "coolicons:house-user-bulk-round",
	});
}

export default Component;
