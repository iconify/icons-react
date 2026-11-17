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
		"content": `<style>.a155wrnqg {
  d: path("M12 7h4a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6a4 4 0 0 1 4-4zM8 19v2h8v-2M4 13h16");
}

.cfhb2bcdc {
  stroke-opacity: 0.4;
  d: path("M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="cfhb2bcdc"/><path class="a155wrnqg"/></g>`,
		"fallback": "coolicons:gas-cylinder-duocolor",
	});
}

export default Component;
