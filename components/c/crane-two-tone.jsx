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
		"content": `<style>.dj-9w836s {
  d: path("M19 7L19 11M17 15L17 13C17 11.8954 17.8954 11 19 11C20.1046 11 21 11.8954 21 13L21 15");
}

.ihc_xk0rt {
  stroke-opacity: 0.4;
  d: path("M3 7L21 7M8 3L8 21M5 21L11 21M4 7L4 10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ihc_xk0rt"/><path class="dj-9w836s"/></g>`,
		"fallback": "keyline-icons:crane-two-tone",
	});
}

export default Component;
