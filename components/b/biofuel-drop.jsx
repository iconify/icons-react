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
		"content": `<style>.j21wfe-zf {
  d: path("M9 17.25C9 14 11 12 15 12c0 3.25-2 5.25-6 5.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zi0ksdbag {
  d: path("M12 2.5c3 4 6.5 7.5 6.5 12a6.5 6.5 0 0 1-13 0c0-4.5 3.5-8 6.5-12Z");
}
</style><g class="ulnmmdpxh"><path class="zi0ksdbag"/><path class="j21wfe-zf"/></g>`,
		"fallback": "uix-sharp:biofuel-drop",
	});
}

export default Component;
