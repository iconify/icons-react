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
		"content": `<style>.mj2w05jsa {
  d: path("M14.75 15L16 9l1.25 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v0678_blx {
  d: path("M3 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.x4yi1rozh {
  d: path("M11 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0Zm-4.25 3L8 9l1.25 6");
}
</style><g class="ulnmmdpxh"><path class="v0678_blx"/><path class="x4yi1rozh"/><path class="mj2w05jsa"/></g>`,
		"fallback": "uix-sharp:coverage-overlap",
	});
}

export default Component;
