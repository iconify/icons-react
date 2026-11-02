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
		"content": `<style>.nnzc6bu3w {
  stroke-opacity: 0.4;
  d: path("M14 12h6m-3-3v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sueirabcw {
  d: path("M4 4h6v16H4Z");
}
</style><g class="nrj6p8qat"><path class="nnzc6bu3w"/><path class="sueirabcw"/></g>`,
		"fallback": "coolicons:column-plus-duocolor-sharp",
	});
}

export default Component;
