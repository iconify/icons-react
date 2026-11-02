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

.la-33bykb {
  d: path("M17 11a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm0 4a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Z");
}

.pg3egvbwv {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m4.106 6.553l2-4A1 1 0 0 1 7 2h10c.379 0 .725.214.894.553l2 4A1 1 0 0 1 19 8h-.08l-.923 11.083c-.064.762-.327 1.504-.865 2.061c-.562.583-1.331.856-2.132.856H9c-.801 0-1.57-.273-2.132-.856c-.538-.557-.801-1.299-.865-2.061L5.08 8H5a1 1 0 0 1-.894-1.447");
}
</style><g class="cuyn6tgcc"><path class="pg3egvbwv"/><path class="la-33bykb"/></g>`,
		"fallback": "coolicons:coffee-to-go-bulk-sharp",
	});
}

export default Component;
