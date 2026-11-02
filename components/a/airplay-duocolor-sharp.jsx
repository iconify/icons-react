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
		"content": `<style>.izbywsvho {
  stroke-opacity: 0.4;
  d: path("M12 20H7l5-5l5 5z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.onrz0cnly {
  d: path("M6 15H3V4h18v11h-3");
}
</style><g class="nrj6p8qat"><path class="izbywsvho"/><path class="onrz0cnly"/></g>`,
		"fallback": "coolicons:airplay-duocolor-sharp",
	});
}

export default Component;
