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
		"content": `<style>.a-l11-55q {
  stroke-opacity: 0.4;
  d: path("M7 3c0 2 2 4 4 4c-2 0-4 2-4 4c0-2-2-4-4-4c2 0 4-2 4-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yyrf-ibdj {
  d: path("m12 12l9 3l-3 1l1 1a1.414 1.414 0 0 1-2 2l-1-1l-1 3z");
}
</style><g class="nrj6p8qat"><path class="a-l11-55q"/><path class="yyrf-ibdj"/></g>`,
		"fallback": "coolicons:cursor-sparkle-duocolor-round",
	});
}

export default Component;
