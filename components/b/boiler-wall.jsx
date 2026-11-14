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
		"content": `<style>.peqnp71cz {
  d: path("M10 10.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.th2dvrb4v {
  d: path("M3 3v18.5m3-16h11.5v13H6Zm8.5 0V3h6m-8.75 15.5v3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="th2dvrb4v"/><path class="peqnp71cz"/></g>`,
		"fallback": "uix-sharp:boiler-wall",
	});
}

export default Component;
