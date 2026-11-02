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
		"content": `<style>.fnzvalwps {
  stroke-opacity: 0.4;
  d: path("M9 21h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ua11a9d-z {
  d: path("M12 17H9v-6H4l8-8l8 8h-5v6z");
}
</style><g class="nrj6p8qat"><path class="fnzvalwps"/><path class="ua11a9d-z"/></g>`,
		"fallback": "coolicons:caps-lock-duocolor-sharp",
	});
}

export default Component;
