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
		"content": `<style>.cm1p8tb4s {
  d: path("M2 10V7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a1 1 0 0 1-2 0v-6h-3a1 1 0 0 1 0-2h3V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2h3a1 1 0 0 1 0 2H4v6a1 1 0 0 1-2 0Zm15-5a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm-7.764 9.832a3 3 0 1 1 5.527 2.338a3 3 0 0 1-5.527-2.338m2.057 1.875a.999.999 0 1 0 1.414-1.414a.999.999 0 1 0-1.414 1.414");
}

.cuyn6tgcc {
  fill: currentColor;
}

.qsb179dft {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7 9h10a1 1 0 0 1 1 1v9a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-9a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="qsb179dft"/><path class="cm1p8tb4s"/></g>`,
		"fallback": "coolicons:atm-bulk-round",
	});
}

export default Component;
