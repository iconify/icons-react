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
		"content": `<style>.ixv163bsh {
  d: path("M10 21v-4h4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vilsfcbox {
  fill: currentColor;
  d: path("m3.5 10.5l8.5-7l8.5 7Z");
}

.y_evnvbxu {
  d: path("M3.5 10.5V21h17V10.5");
}
</style><g class="ulnmmdpxh"><path class="vilsfcbox"/><path class="y_evnvbxu"/><path class="ixv163bsh"/></g>`,
		"fallback": "uix-sharp:attic",
	});
}

export default Component;
