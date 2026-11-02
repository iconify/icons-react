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
		"content": `<style>.jw8scnbdr {
  stroke-opacity: 0.4;
  d: path("M8 16h.01M12 16h.01M16 16h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pb4s0mydj {
  d: path("M3 21h18M5 21V5a2 2 0 1 1 4 0v7l5-3v3l5-3v12");
}
</style><g class="nrj6p8qat"><path class="jw8scnbdr"/><path class="pb4s0mydj"/></g>`,
		"fallback": "coolicons:factory-duocolor",
	});
}

export default Component;
