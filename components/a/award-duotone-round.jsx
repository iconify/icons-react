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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.j5esfdc1l {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 15h2l1 3c.369 1.107-.262 2.369-1 2l-2-1l-2 1c-.738.369-1.369-.893-1-2l1-3za6 6 0 1 1 0-12a6 6 0 0 1 0 12");
}

.tmy95jbif {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 9a6 6 0 1 0 12 0A6 6 0 0 0 6 9m8 6l1 3c.369 1.107-.262 2.369-1 2l-2-1l-2 1c-.738.369-1.369-.893-1-2l1-3");
}
</style><g class="ft5dv1b6b"><path class="j5esfdc1l"/><path class="tmy95jbif"/></g>`,
		"fallback": "coolicons:award-duotone-round",
	});
}

export default Component;
