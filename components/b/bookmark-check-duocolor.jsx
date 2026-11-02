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
		"content": `<style>.f8k7zkb6h {
  d: path("M12 4h4a2 2 0 0 1 2 2v12c0 .855-1.718.855-3 0l-3-2l-3 2c-1.282.855-3 .855-3 0V6a2 2 0 0 1 2-2z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vu_mukbdk {
  stroke-opacity: 0.4;
  d: path("m9 10l2 2l4-4");
}
</style><g class="nrj6p8qat"><path class="vu_mukbdk"/><path class="f8k7zkb6h"/></g>`,
		"fallback": "coolicons:bookmark-check-duocolor",
	});
}

export default Component;
