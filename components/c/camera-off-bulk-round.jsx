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

.d8rmzsr4b {
  d: path("m2.707 2.293l19 19a.999.999 0 1 1-1.414 1.414l-6.261-6.261a4 4 0 0 1-5.478-5.478L1.293 3.707a.999.999 0 1 1 1.414-1.414m9.811 12.64l-2.451-2.451a2.004 2.004 0 0 0 2.451 2.451");
}

.kxtpr87yv {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21.475 18.233L7.914 4.672l.379-.379C9.008 3.578 9.961 3 11 3h2c1.039 0 1.992.578 2.707 1.293l1.725 1.725A5 5 0 0 1 22 11v5a5 5 0 0 1-.525 2.233m-2.083 2.159c-.734.4-1.556.608-2.392.608H7a5 5 0 0 1-5-5v-5a5.01 5.01 0 0 1 3.297-4.703Z");
}
</style><g class="cuyn6tgcc"><path class="kxtpr87yv"/><path class="d8rmzsr4b"/></g>`,
		"fallback": "coolicons:camera-off-bulk-round",
	});
}

export default Component;
