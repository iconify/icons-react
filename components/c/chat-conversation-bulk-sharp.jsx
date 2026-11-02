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
		"content": `<style>.aymuz-blo {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M15 2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7.414l-3.707 3.707A1 1 0 0 1 2 17V3a1 1 0 0 1 1-1Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.fc7wuhbnp {
  d: path("M19 8h2a1 1 0 0 1 1 1v12a1.002 1.002 0 0 1-1.707.707L16.586 18H9a1 1 0 0 1 0-2h8c.265 0 .52.105.707.293L20 18.586V10h-1a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="aymuz-blo"/><path class="fc7wuhbnp"/></g>`,
		"fallback": "coolicons:chat-conversation-bulk-sharp",
	});
}

export default Component;
