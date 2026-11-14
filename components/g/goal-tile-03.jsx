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
		"content": `<style>.ibsfrsb3a {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm3 0h.01");
}

.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.rocslgbmd {
  d: path("M6 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="rocslgbmd"/><path class="ibsfrsb3a"/></g>`,
		"fallback": "uix-sharp:goal-tile-03",
	});
}

export default Component;
