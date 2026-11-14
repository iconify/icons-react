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
		"content": `<style>.n-1nsmzzc {
  d: path("M5.5 10q2.5-3 5 0q-2.5 3-5 0Zm8 0q2.5-3 5 0q-2.5 3-5 0ZM8 8.5h.01m7.99 0h.01M9.5 16h5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="n-1nsmzzc"/></g>`,
		"fallback": "uix-sharp:face-eye-roll",
	});
}

export default Component;
