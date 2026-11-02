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
		"content": `<style>.aiqmhrbjl {
  d: path("M10.707 9.293L12 10.586l1.293-1.293a.999.999 0 1 1 1.414 1.414L13.414 12l1.293 1.293a.999.999 0 1 1-1.414 1.414L12 13.414l-1.293 1.293a.999.999 0 1 1-1.414-1.414L10.586 12l-1.293-1.293a.999.999 0 1 1 1.414-1.414");
}

.cuyn6tgcc {
  fill: currentColor;
}

.qy1qzbe5h {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 7v10a1 1 0 0 1-.553.894l-8 4a1 1 0 0 1-.894 0l-8-4A1 1 0 0 1 3 17V7c0-.379.214-.725.553-.894l8-4a1 1 0 0 1 .894 0l8 4A1 1 0 0 1 21 7");
}
</style><g class="cuyn6tgcc"><path class="qy1qzbe5h"/><path class="aiqmhrbjl"/></g>`,
		"fallback": "coolicons:hexagon-close-bulk-sharp",
	});
}

export default Component;
