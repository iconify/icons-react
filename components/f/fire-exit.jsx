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
		"content": `<style>.czh0gvf3l {
  d: path("M13 7V2.5H3v19h10V17");
}

.eocyiticd {
  d: path("M3 2.5L8.5 5v14.5l-5.5 2Zm8.25 9.5H21m-3.5-3.5L21 12l-3.5 3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="czh0gvf3l"/><path class="eocyiticd"/></g>`,
		"fallback": "uix-sharp:fire-exit",
	});
}

export default Component;
