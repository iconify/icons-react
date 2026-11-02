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

.og2hi81sh {
  d: path("M12 6h9v14H3V4h7z");
}

.oh49elb1a {
  stroke-opacity: 0.4;
  d: path("M9 13h6m-3-3v6");
}
</style><g class="nrj6p8qat"><path class="oh49elb1a"/><path class="og2hi81sh"/></g>`,
		"fallback": "coolicons:folder-plus-duocolor-sharp",
	});
}

export default Component;
