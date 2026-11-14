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
		"content": `<style>.h6hbdqbim {
  d: path("M7 17.5v-7a5 5 0 0 1 10 0v7");
}

.p0cycijxw {
  d: path("M10 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-3 7.5c0-1.75 2.25-2.75 5-2.75s5 1 5 2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zdgu3ybil {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0Z");
}
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="h6hbdqbim"/><path class="p0cycijxw"/></g>`,
		"fallback": "uix-sharp:astronaut-portrait",
	});
}

export default Component;
