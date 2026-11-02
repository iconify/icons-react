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
		"content": `<style>.fjmk1tc6j {
  d: path("M12 4a8 8 0 1 1-8 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vjl3nsngf {
  stroke-opacity: 0.4;
  d: path("M12 12L4 4m0 4V4h4");
}
</style><g class="nrj6p8qat"><path class="vjl3nsngf"/><path class="fjmk1tc6j"/></g>`,
		"fallback": "coolicons:escape-duocolor-sharp",
	});
}

export default Component;
