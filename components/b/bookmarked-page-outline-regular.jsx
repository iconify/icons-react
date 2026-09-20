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
		"content": `<style>.atoje4bsc {
  d: path("M2 6h20");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.viv5gg8xx {
  d: path("M2 4a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.y8ytd_jni {
  d: path("M8 10h8v7l-4 -4 -4 4Z");
}
</style><g class="nrj6p8qat"><path class="viv5gg8xx"/><path class="atoje4bsc"/><path class="y8ytd_jni"/></g>`,
		"fallback": "iconmind:bookmarked-page-outline-regular",
	});
}

export default Component;
