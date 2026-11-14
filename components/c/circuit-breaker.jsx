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
		"content": `<style>.dcwqhs41b {
  d: path("M9.25 12h5.5v6h-5.5Z");
}

.j5yxt517o {
  d: path("M3.5 2.5h17v19h-17Zm8.5 4V12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j5yxt517o"/><path class="dcwqhs41b"/></g>`,
		"fallback": "uix-sharp:circuit-breaker",
	});
}

export default Component;
