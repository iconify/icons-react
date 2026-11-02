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

.l-bd8kbsd {
  d: path("M5 20h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2");
}

.pf0amrmkn {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m12.832 3.445l3.395 5.093l4.148-3.319a1.002 1.002 0 0 1 1.609.96l-1.702 9.358A3 3 0 0 1 17.331 18H6.669a3 3 0 0 1-2.951-2.463L2.016 6.179a1.001 1.001 0 0 1 1.609-.96l4.148 3.319l3.395-5.093a1 1 0 0 1 1.664 0");
}
</style><g class="cuyn6tgcc"><path class="pf0amrmkn"/><path class="l-bd8kbsd"/></g>`,
		"fallback": "coolicons:crown-bulk",
	});
}

export default Component;
