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
		"content": `<style>.c92lj6b2n {
  d: path("M12 6.5c-1.25-1-3-1.25-4.5-1V12c1.5-.25 3.25 0 4.5 1c1.25-1 3-1.25 4.5-1V5.5c-1.5-.25-3.25 0-4.5 1Zm0 0V13");
}

.iau37ab1m {
  d: path("M2.5 3.5h19v13h-19Zm9.5 13v4m-4 0h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iau37ab1m"/><path class="c92lj6b2n"/></g>`,
		"fallback": "uix-sharp:digital-library",
	});
}

export default Component;
