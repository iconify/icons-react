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

.wjclvfbbb {
  d: path("M10.707 10.293a.999.999 0 1 1-1.414 1.414l-2-2a.999.999 0 1 1 1.414-1.414Z");
}

.y2yk23bwr {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m17.243 14.669l-3.831 4.257a1.9 1.9 0 0 1-2.824 0l-7.697-8.552a2 2 0 0 1 .073-2.752l2.743-2.743A3 3 0 0 1 7.828 4h8.344a3 3 0 0 1 2.121.879l2.743 2.743a2 2 0 0 1 .073 2.752Z");
}
</style><g class="cuyn6tgcc"><path class="y2yk23bwr"/><path class="wjclvfbbb"/></g>`,
		"fallback": "coolicons:gem-bulk",
	});
}

export default Component;
