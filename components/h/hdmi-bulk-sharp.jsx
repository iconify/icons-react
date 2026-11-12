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

.f-8ytsblx {
  d: path("M8 10h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2");
}

.ukzooiblp {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 6a1 1 0 0 1 1 1v4a1 1 0 0 1-.168.555l-4 6A1 1 0 0 1 17 18H7a1 1 0 0 1-.832-.445l-4-6A1 1 0 0 1 2 11V7a1 1 0 0 1 1-1Z");
}
</style><g class="cuyn6tgcc"><path class="ukzooiblp"/><path class="f-8ytsblx"/></g>`,
		"fallback": "coolicons:hdmi-bulk-sharp",
	});
}

export default Component;
