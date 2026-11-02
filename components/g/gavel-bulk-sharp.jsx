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

.mxngbac2g {
  d: path("m13.493 11.907l-1.4-1.4a.999.999 0 1 1 1.414-1.414l1.4 1.4a.999.999 0 1 1-1.414 1.414M13 21a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Z");
}

.uy6081bpy {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M7.707 20.707a3.121 3.121 0 1 1-4.414-4.414L10.586 9L9.293 7.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0L15 13.414Z");
}
</style><g class="cuyn6tgcc"><path class="uy6081bpy"/><path class="mxngbac2g"/></g>`,
		"fallback": "coolicons:gavel-bulk-sharp",
	});
}

export default Component;
