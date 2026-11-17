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
		"content": `<style>.aakag8i1b {
  d: path("M7 12h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.ui5owirnd {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 7h18a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="ui5owirnd"/><path class="aakag8i1b"/></g>`,
		"fallback": "coolicons:air-conditioner-off-centered-bulk-sharp",
	});
}

export default Component;
