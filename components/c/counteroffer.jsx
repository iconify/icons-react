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
		"content": `<style>.br6vtabco {
  d: path("m13.75 19.5l1.5 1.5l1.5-1.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vpljg9beo {
  d: path("M5.75 7.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm15 14v-4.25a2.75 2.75 0 0 0-5.5 0V21");
}

.zjkrodb6k {
  d: path("M9.913 19.413L3 12.5V3h9.5l8.5 8.5l-.692.692");
}
</style><g class="ulnmmdpxh"><path class="zjkrodb6k"/><path class="vpljg9beo"/><path class="br6vtabco"/></g>`,
		"fallback": "uix-sharp:counteroffer",
	});
}

export default Component;
