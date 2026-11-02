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

.k4smnu93g {
  d: path("M7 9h11a.998.998 0 0 1 .97 1.243l-1 4A1 1 0 0 1 17 15H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1");
}

.z6wzqpb1u {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M6 10a1 1 0 0 1 1-1h2V8a6 6 0 0 1 6-6h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3v1h3a.998.998 0 0 1 .97 1.243l-1 4A1 1 0 0 1 17 15h-2v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6H7a1 1 0 0 1-1-1Z");
}
</style><g class="cuyn6tgcc"><path class="z6wzqpb1u"/><path class="k4smnu93g"/></g>`,
		"fallback": "coolicons:facebook-bulk-sharp",
	});
}

export default Component;
