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
		"content": `<style>.dxqe0ubzq {
  d: path("M8.25 9.25H5l-2.5 2.5l5-1.25m6.25 4.25v.3m-1.45 4.4l-1.05 1.05l.416-1.663m.558-2.232L12.5 15.5m.5-7a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm1.75 9.5l2 2L21 15.75");
}

.j2efr4bxg {
  d: path("M19.5 3.5c-5 0-10 3-12 7l5 5c4-2 7-7 7-12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j2efr4bxg"/><path class="dxqe0ubzq"/></g>`,
		"fallback": "uix-sharp:deploy-approve",
	});
}

export default Component;
