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
		"content": `<style>.lppmt7bfa {
  stroke-opacity: 0.4;
  d: path("M20 6v12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vw22eibqi {
  d: path("m12 16l4-4l-4-4m4 4H4");
}
</style><g class="nrj6p8qat"><path class="lppmt7bfa"/><path class="vw22eibqi"/></g>`,
		"fallback": "coolicons:arrow-right-to-line-duocolor-sharp",
	});
}

export default Component;
