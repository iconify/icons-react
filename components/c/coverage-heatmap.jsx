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
		"content": `<style>.r5osztbms {
  fill: currentColor;
  d: path("M3 9V5a2 2 0 0 1 2-2h4v6Z");
}

.scr9u5bis {
  d: path("M3 3h18v18H3Zm0 6h18M3 15h18M9 3v18m6-18v18");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x9ahn40kq {
  d: path("M12 12h.01");
}
</style><g class="ulnmmdpxh"><path class="scr9u5bis"/><path class="r5osztbms"/><path class="x9ahn40kq"/></g>`,
		"fallback": "uix-sharp:coverage-heatmap",
	});
}

export default Component;
