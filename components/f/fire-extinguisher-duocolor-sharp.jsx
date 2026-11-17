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
		"content": `<style>.ccatt0h8i {
  d: path("M9 12a4 4 0 1 1 8 0v9H9zm4-4V5l6-2M9 15h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p-tzjoy3w {
  stroke-opacity: 0.4;
  d: path("M13 5H9a4 4 0 0 0-4 4v7");
}
</style><g class="nrj6p8qat"><path class="p-tzjoy3w"/><path class="ccatt0h8i"/></g>`,
		"fallback": "coolicons:fire-extinguisher-duocolor-sharp",
	});
}

export default Component;
