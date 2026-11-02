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
		"content": `<style>.aleqeubgz {
  stroke-opacity: 0.4;
  d: path("M9 5V3M5 9H3m10-4l1-1m-9 9l-1 1");
}

.k9r-3cdlg {
  d: path("m9 9l12 4l-4 1l3 3l-3 3l-3-3l-1 4z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="aleqeubgz"/><path class="k9r-3cdlg"/></g>`,
		"fallback": "coolicons:cursor-click-duocolor-sharp",
	});
}

export default Component;
