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
		"content": `<style>.tsc4dub8c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.2 19H2.5V5h19v14h-.7M2.5 9.5h19m-19 0h19M6 15h2.5m9.5-.25v3.5M18 21h.01");
}
</style><path class="tsc4dub8c"/>`,
		"fallback": "uix-sharp:card-error",
	});
}

export default Component;
