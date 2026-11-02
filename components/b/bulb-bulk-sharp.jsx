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

.ie_ydxblm {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16 15v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-3c0-.17-.141-.401-.225-.542q-.195-.325-.786-1.102C6.013 12.076 5 10.686 5 9a7 7 0 1 1 14 0c0 1.686-1.013 3.076-1.989 4.356q-.591.777-.786 1.102c-.084.141-.225.372-.225.542");
}

.pk-3hg67t {
  d: path("M9 20h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="ie_ydxblm"/><path class="pk-3hg67t"/></g>`,
		"fallback": "coolicons:bulb-bulk-sharp",
	});
}

export default Component;
