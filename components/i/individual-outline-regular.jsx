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
		"content": `<style>.n92hyrp1a {
  d: path("M9 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.on0zajbot {
  d: path("M7 17a5 5 0 0 1 10 0");
}

.qik8460ao {
  d: path("M5 21h14");
}
</style><g class="nrj6p8qat"><path class="n92hyrp1a"/><path class="on0zajbot"/><path class="qik8460ao"/></g>`,
		"fallback": "iconmind:individual-outline-regular",
	});
}

export default Component;
