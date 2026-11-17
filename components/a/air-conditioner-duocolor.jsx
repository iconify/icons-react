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
		"content": `<style>.bsebccb0t {
  d: path("M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm4 3h10");
}

.lqwe2v5ad {
  stroke-opacity: 0.4;
  d: path("M8 15a3 3 0 0 1-3 3m11-3a3 3 0 0 0 3 3m-7-3v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="lqwe2v5ad"/><path class="bsebccb0t"/></g>`,
		"fallback": "coolicons:air-conditioner-duocolor",
	});
}

export default Component;
