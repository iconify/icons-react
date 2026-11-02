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
		"content": `<style>.mm4kkrtjd {
  d: path("m6 5l6 6l6-6m-6 6v8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r769j7b0q {
  stroke-opacity: 0.4;
  d: path("M8 13h4m0 0h4m-8 4h4m0 0h4");
}
</style><g class="nrj6p8qat"><path class="r769j7b0q"/><path class="mm4kkrtjd"/></g>`,
		"fallback": "coolicons:currency-yen-duocolor-sharp",
	});
}

export default Component;
