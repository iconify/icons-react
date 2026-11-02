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
		"content": `<style>.jow3zqqeq {
  d: path("M4 5h16v16H4Zm0 4h16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s7unokb9e {
  stroke-opacity: 0.4;
  d: path("M8 3v2m8-2v2");
}
</style><g class="nrj6p8qat"><path class="s7unokb9e"/><path class="jow3zqqeq"/></g>`,
		"fallback": "coolicons:calendar-duocolor-sharp",
	});
}

export default Component;
