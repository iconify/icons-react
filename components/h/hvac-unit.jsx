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
		"content": `<style>.gjch21gtt {
  d: path("M6 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm11-3h4.5M17 14h4.5M10 12h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zf5rq9bri {
  d: path("M3 4h14v16H3Z");
}
</style><g class="ulnmmdpxh"><path class="zf5rq9bri"/><path class="gjch21gtt"/></g>`,
		"fallback": "uix-sharp:hvac-unit",
	});
}

export default Component;
