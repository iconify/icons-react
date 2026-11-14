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
		"content": `<style>.c7b6lcbal {
  d: path("M4.5 7.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm9 5.5l8-3.5m-8 7.5l8 3.5M8 7.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xi55z0yjg {
  d: path("M2.5 11h11v8h-11Z");
}
</style><g class="ulnmmdpxh"><path class="xi55z0yjg"/><path class="c7b6lcbal"/></g>`,
		"fallback": "uix-sharp:film-projector",
	});
}

export default Component;
