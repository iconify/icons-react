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
		"content": `<style>.ah3yi8onm {
  d: path("M11.25 13.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.hvrmw7b7m {
  d: path("M6.75 13.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.nct7lub7f {
  d: path("M9 9.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j_psw1y4g"/><path class="nct7lub7f"/><path class="hvrmw7b7m"/><path class="ah3yi8onm"/></g>`,
		"fallback": "uix-sharp:blend-screen",
	});
}

export default Component;
