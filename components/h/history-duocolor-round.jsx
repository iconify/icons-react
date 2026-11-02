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

.u2858acpy {
  d: path("M4 16a8.944 8.944 0 1 0 0-8m4 0H4V4");
}

.wpv1wrben {
  stroke-opacity: 0.4;
  d: path("M12 8v4l3 3");
}
</style><g class="nrj6p8qat"><path class="wpv1wrben"/><path class="u2858acpy"/></g>`,
		"fallback": "coolicons:history-duocolor-round",
	});
}

export default Component;
