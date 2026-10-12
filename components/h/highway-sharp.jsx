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
		"content": `<style>.bn-wcdbnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 2.75h6l.3.95l5.15 16.6l.3.95H2.75l.3-.95L8.2 3.7l.3-.95zm1 2.75l-.25 2m-.25 3L9.75 13m-.25 3l-.25 3M13.5 5.5l.25 2m.25 3l.25 2.5m.25 3l.25 3");
}
</style><path class="bn-wcdbnc"/>`,
		"fallback": "iconoven:highway-sharp",
	});
}

export default Component;
