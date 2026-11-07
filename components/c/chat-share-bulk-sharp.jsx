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
		"content": `<style>.beaj39ecj {
  d: path("M16.707 9.293a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414L13.586 11H9v2a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1h5.586l-1.293-1.293a.999.999 0 1 1 1.414-1.414Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.jer5s5b2c {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 18H7.414l-3.707 3.707A1 1 0 0 1 2 21V3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1");
}
</style><g class="cuyn6tgcc"><path class="jer5s5b2c"/><path class="beaj39ecj"/></g>`,
		"fallback": "coolicons:chat-share-bulk-sharp",
	});
}

export default Component;
