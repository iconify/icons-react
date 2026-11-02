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

.osfl_dbub {
  d: path("M12 6h5a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V6a2 2 0 0 1 2-2h5z");
}
</style><g class="nrj6p8qat"><path class="gc2kh7r2z"/><path class="osfl_dbub"/></g>`,
		"fallback": "coolicons:folder-download-duocolor-round",
	});
}

export default Component;
