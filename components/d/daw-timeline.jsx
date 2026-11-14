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
		"content": `<style>.igs5soaez {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h9V7h-9ZM7 10.25h12v3.5H7ZM2.5 17H9v3.5H2.5Zm10 0h9v3.5h-9ZM15 2.5v19");
}
</style><path class="igs5soaez"/>`,
		"fallback": "uix-sharp:daw-timeline",
	});
}

export default Component;
