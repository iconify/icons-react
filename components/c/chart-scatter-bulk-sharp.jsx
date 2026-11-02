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

.dhpxnuokf {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 19h17a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0Z");
}

.ecu_00bpt {
  d: path("M15.158 5.221a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558m-4 5a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558m6 3a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558m-11 1a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558");
}
</style><g class="cuyn6tgcc"><path class="dhpxnuokf"/><path class="ecu_00bpt"/></g>`,
		"fallback": "coolicons:chart-scatter-bulk-sharp",
	});
}

export default Component;
