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
		"content": `<style>.kfoljqdny {
  d: path("M9 9a3 3 0 0 1 6 0v6a3 3 0 0 1-6 0Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ou8j9pw5a {
  stroke-opacity: 0.4;
  d: path("M4 3v18M20 3v18");
}
</style><g class="nrj6p8qat"><path class="ou8j9pw5a"/><path class="kfoljqdny"/></g>`,
		"fallback": "coolicons:distribute-horizontal-duocolor-round",
	});
}

export default Component;
