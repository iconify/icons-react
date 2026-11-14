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
		"content": `<style>.exbmo7_qa {
  d: path("M4 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm6 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm8.25-5h3.25v8h-3.25Z");
}

.j615f7m9d {
  d: path("M2.5 16V6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v10Zm0-6.5h13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="j615f7m9d"/><path class="exbmo7_qa"/></g>`,
		"fallback": "uix-sharp:bus-boarder",
	});
}

export default Component;
