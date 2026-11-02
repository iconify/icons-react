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

.ppdzzsb6b {
  d: path("M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.q7i8brbqj {
  stroke-opacity: 0.4;
  d: path("M3 12h7m4 0h7");
}
</style><g class="nrj6p8qat"><path class="q7i8brbqj"/><path class="ppdzzsb6b"/></g>`,
		"fallback": "coolicons:git-commit-duocolor",
	});
}

export default Component;
