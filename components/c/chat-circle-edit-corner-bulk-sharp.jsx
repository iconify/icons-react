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

.gqtzinbhr {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M20 9H9v11a1 1 0 0 1-.804.981l-5 1a1 1 0 0 1-1.177-1.177l.935-4.673a9.943 9.943 0 0 1 17.94-8.578A1 1 0 0 1 20 9");
}

.l0xf8klep {
  d: path("M12 21v-3c0-.265.105-.52.293-.707l5-5a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-5 5A1 1 0 0 1 16 22h-3a1 1 0 0 1-1-1");
}
</style><g class="cuyn6tgcc"><path class="gqtzinbhr"/><path class="l0xf8klep"/></g>`,
		"fallback": "coolicons:chat-circle-edit-corner-bulk-sharp",
	});
}

export default Component;
