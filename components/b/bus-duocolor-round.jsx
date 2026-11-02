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
		"content": `<style>.ez2ukkb4s {
  stroke-opacity: 0.4;
  d: path("M8 16h.01M16 16h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rb47acbiv {
  d: path("M19 11v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4zM7 19h2v2H7Zm8 0h2v2h-2ZM5 13h14M9 6h6");
}
</style><g class="nrj6p8qat"><path class="ez2ukkb4s"/><path class="rb47acbiv"/></g>`,
		"fallback": "coolicons:bus-duocolor-round",
	});
}

export default Component;
