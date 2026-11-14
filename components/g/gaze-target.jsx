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
		"content": `<style>.mbo_oqyrj {
  d: path("M7.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm4.5 0h.01");
}

.rr4e_5esx {
  d: path("M2.5 12C5 6.5 8.25 4.25 12 4.25S19 6.5 21.5 12c-2.5 5.5-5.75 7.75-9.5 7.75S5 17.5 2.5 12Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rr4e_5esx"/><path class="mbo_oqyrj"/></g>`,
		"fallback": "uix-sharp:gaze-target",
	});
}

export default Component;
