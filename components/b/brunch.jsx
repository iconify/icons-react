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
		"content": `<style>.ieevmvbhf {
  d: path("M7.5 11c0-3.5 3-4.5 5-3.5c2-1.5 5 0 4.5 3c1.5 2-.5 5.5-3 5c-2 2-5.5 1-5.5-1.5c-1.5-.5-1.5-2-1-3Z");
}

.ikczbac7g {
  fill: currentColor;
  d: path("M10.5 11.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
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
</style><g class="ulnmmdpxh"><path class="zdgu3ybil"/><path class="ieevmvbhf"/><path class="ikczbac7g"/></g>`,
		"fallback": "uix-sharp:brunch",
	});
}

export default Component;
