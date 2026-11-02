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
		"content": `<style>.fxfr12bzu {
  stroke-opacity: 0.4;
  d: path("M15 14a3 3 0 0 1-3 3");
}

.jornx4v1h {
  d: path("M12 3C8.5 3 5 8.5 5 14a7 7 0 0 0 14 0c0-5.5-3.5-11-7-11");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="fxfr12bzu"/><path class="jornx4v1h"/></g>`,
		"fallback": "coolicons:egg-duocolor",
	});
}

export default Component;
