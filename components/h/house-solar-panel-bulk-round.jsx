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

.o3cwdvb-i {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16 22H8a5 5 0 0 1-5-5v-5.185a5 5 0 0 1 1.707-3.763l4-3.5a5 5 0 0 1 6.586 0l4 3.5A5 5 0 0 1 21 11.815V17a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22");
}

.w5_x33b7d {
  d: path("M8 19a1 1 0 0 1-.992-1.124l1-8A1 1 0 0 1 9 9h6a1 1 0 0 1 .992.876l1 8A.997.997 0 0 1 16 19Zm3-8H9.883l-.25 2H11Zm0 4H9.383l-.25 2H11Zm2 2h1.867l-.25-2H13Zm1.367-4l-.25-2H13v2Z");
}
</style><g class="cuyn6tgcc"><path class="o3cwdvb-i"/><path class="w5_x33b7d"/></g>`,
		"fallback": "coolicons:house-solar-panel-bulk-round",
	});
}

export default Component;
