import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bvi81v_pm {
  d: path("M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16m0 177.57l-51.77-32.35a8 8 0 0 0-8.48 0L72 209.57V48h112Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.rk2a66ahi {
  d: path("M192 48v176l-64-40l-64 40V48a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="rk2a66ahi"/><path class="bvi81v_pm"/></g>`,
		"fallback": "ph:bookmark-simple-duotone",
	});
}

export default Component;
