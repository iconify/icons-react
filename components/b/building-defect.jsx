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
		"content": `<style>.k4s89sbqk {
  d: path("M15.2 17H3V3h18v14h-.2");
}

.qa3wbl5ny {
  d: path("M10 3L8 7l3.5 3.5l-3 3.5l1.5 3m8-2.25v3.5M18 21h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k4s89sbqk"/><path class="qa3wbl5ny"/></g>`,
		"fallback": "uix-sharp:building-defect",
	});
}

export default Component;
