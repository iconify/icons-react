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
		"content": `<style>.apckf0axv {
  fill: currentColor;
  d: path("M3 16h18c0 3 -4 5 -9 5s-9 -2 -9 -5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jtmtyidol {
  d: path("M3 16h18c0 3 -4 5 -9 5s-9 -2 -9 -5");
}

.o8gkfbcfh {
  fill: currentColor;
  d: path("M6 7v6h12V7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tsevlt2dd {
  d: path("M6 7v6h12V7Z");
}

.wj4ljftik {
  d: path("M10 7v6");
}
</style><g class="s0phu2bbs"><path class="o8gkfbcfh"/><path class="apckf0axv"/><path class="tsevlt2dd"/><path class="wj4ljftik"/><path class="jtmtyidol"/></g>`,
		"fallback": "iconmind:butter-duotone-bold",
	});
}

export default Component;
