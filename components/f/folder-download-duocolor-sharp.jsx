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
		"content": `<style>.gc2kh7r2z {
  stroke-opacity: 0.4;
  d: path("m9 13l3 3l3-3m-3 3v-6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.og2hi81sh {
  d: path("M12 6h9v14H3V4h7z");
}
</style><g class="nrj6p8qat"><path class="gc2kh7r2z"/><path class="og2hi81sh"/></g>`,
		"fallback": "coolicons:folder-download-duocolor-sharp",
	});
}

export default Component;
