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
		"content": `<style>.agv48sb9f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 9.25a3.5 1.75-30 1 1 6.06-3.5a3.5 1.75-30 1 1-6.06 3.5Zm7.44-3.5a3.5 1.75 30 1 1 6.06 3.5a3.5 1.75 30 1 1-6.06-3.5Zm-9.69 7h18c0 4.5-3.75 7.5-9 7.5s-9-3-9-7.5Z");
}
</style><path class="agv48sb9f"/>`,
		"fallback": "iconoven:dates-bowl-sharp",
	});
}

export default Component;
