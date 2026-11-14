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
		"content": `<style>.ozvywq8qf {
  d: path("M6.5 3H18a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 18 21H6.5A2.5 2.5 0 0 1 4 18.5v-13A2.5 2.5 0 0 1 6.5 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zg26fdb_q {
  d: path("M4 18.5A2.5 2.5 0 0 1 6.5 16h13M9 7.5h6.5m-6.5 4h4");
}
</style><g class="ulnmmdpxh"><path class="ozvywq8qf"/><path class="zg26fdb_q"/></g>`,
		"fallback": "uix-sharp:employee-handbook",
	});
}

export default Component;
