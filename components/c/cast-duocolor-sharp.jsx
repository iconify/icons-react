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
		"content": `<style>.akp9ikbed {
  d: path("M3 7V5h18v14h-6");
}

.c0nl5isdz {
  stroke-opacity: 0.4;
  d: path("M3 11a8 8 0 0 1 8 8m-8-4a4 4 0 0 1 4 4m-4 0h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="c0nl5isdz"/><path class="akp9ikbed"/></g>`,
		"fallback": "coolicons:cast-duocolor-sharp",
	});
}

export default Component;
