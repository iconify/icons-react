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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s_bfsqjwx {
  d: path("M3 9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.xc0t1lb7p {
  stroke-opacity: 0.4;
  d: path("M7 3h12a2 2 0 0 1 2 2v12");
}
</style><g class="nrj6p8qat"><path class="xc0t1lb7p"/><path class="s_bfsqjwx"/></g>`,
		"fallback": "coolicons:copy-duocolor",
	});
}

export default Component;
