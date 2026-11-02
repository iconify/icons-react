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
		"content": `<style>.gx2i7mb-b {
  stroke-opacity: 0.4;
  d: path("M8 15h.01M16 15h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xzob5hbxr {
  d: path("M12 3h4a4 4 0 0 1 4 4v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4zM6 18h2v2H6Zm10 0h2v2h-2ZM4 12h16");
}
</style><g class="nrj6p8qat"><path class="gx2i7mb-b"/><path class="xzob5hbxr"/></g>`,
		"fallback": "coolicons:coach-front-duocolor",
	});
}

export default Component;
