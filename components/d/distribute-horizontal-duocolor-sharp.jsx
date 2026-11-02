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
		"content": `<style>.j7p7fjlcb {
  d: path("M9 6h6v12H9Z");
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
</style><g class="nrj6p8qat"><path class="ou8j9pw5a"/><path class="j7p7fjlcb"/></g>`,
		"fallback": "coolicons:distribute-horizontal-duocolor-sharp",
	});
}

export default Component;
