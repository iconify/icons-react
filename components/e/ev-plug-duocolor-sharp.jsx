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

.s2ks1pb2d {
  stroke-opacity: 0.4;
  d: path("M8 9h.01M12 9h.01M16 9h.01M10 14h.01M14 14h.01");
}

.u4dmoybaq {
  d: path("M6 5h12A8.485 8.485 0 1 1 6 5");
}
</style><g class="nrj6p8qat"><path class="s2ks1pb2d"/><path class="u4dmoybaq"/></g>`,
		"fallback": "coolicons:ev-plug-duocolor-sharp",
	});
}

export default Component;
