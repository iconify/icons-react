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
		"content": `<style>.kwh_pwbjw {
  d: path("M12 17H7l-4 4V3h18v14z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tfw3n8bht {
  stroke-opacity: 0.4;
  d: path("M9 10h6");
}
</style><g class="nrj6p8qat"><path class="tfw3n8bht"/><path class="kwh_pwbjw"/></g>`,
		"fallback": "coolicons:chat-minus-duocolor-sharp",
	});
}

export default Component;
