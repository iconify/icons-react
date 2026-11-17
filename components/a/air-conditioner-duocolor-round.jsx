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
		"content": `<style>.lqwe2v5ad {
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

.zjh21db_q {
  d: path("M3 7a4 4 0 0 1 4-4h10a4 4 0 1 1 0 8H7a4 4 0 0 1-4-4m4 1h10");
}
</style><g class="nrj6p8qat"><path class="lqwe2v5ad"/><path class="zjh21db_q"/></g>`,
		"fallback": "coolicons:air-conditioner-duocolor-round",
	});
}

export default Component;
