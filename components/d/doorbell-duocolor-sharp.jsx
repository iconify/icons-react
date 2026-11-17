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

.v_s_3kbpt {
  stroke-opacity: 0.4;
  d: path("M10 14a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.wwxprpzpe {
  d: path("M6 3h12v18H6Zm4 5h4");
}
</style><g class="nrj6p8qat"><path class="v_s_3kbpt"/><path class="wwxprpzpe"/></g>`,
		"fallback": "coolicons:doorbell-duocolor-sharp",
	});
}

export default Component;
