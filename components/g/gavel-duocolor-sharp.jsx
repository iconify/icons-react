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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vnnqo0bps {
  d: path("m14 3l7 7l-4 4l-7-7zm-1 17h8");
}

.xc70yzw7w {
  stroke-opacity: 0.4;
  d: path("m15 12l-8 8a2.121 2.121 0 1 1-3-3l8-8");
}
</style><g class="nrj6p8qat"><path class="xc70yzw7w"/><path class="vnnqo0bps"/></g>`,
		"fallback": "coolicons:gavel-duocolor-sharp",
	});
}

export default Component;
