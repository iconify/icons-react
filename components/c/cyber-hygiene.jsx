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
		"content": `<style>.jvd4-s92j {
  d: path("M14.8 20.5H3V10h13v3.4M6 10V7a3.5 3.5 0 0 1 7 0v3m-3.5 3.75v2.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xiheoprgh {
  d: path("M18 13.5q0 4 4 4q-4 0-4 4q0-4-4-4q4 0 4-4Z");
}
</style><g class="ulnmmdpxh"><path class="jvd4-s92j"/><path class="xiheoprgh"/></g>`,
		"fallback": "uix-sharp:cyber-hygiene",
	});
}

export default Component;
