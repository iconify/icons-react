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
		"content": `<style>.atd7ubbdi {
  d: path("M9 8h4l2 4h3v-2h3v8h-3v-2h-4v4h-4l-2-4H6v-5z");
}

.dfhi724mx {
  stroke-opacity: 0.4;
  d: path("M9 4h4m-2 0v4m-8 3v4m0-2h3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="dfhi724mx"/><path class="atd7ubbdi"/></g>`,
		"fallback": "coolicons:engine-duocolor-sharp",
	});
}

export default Component;
