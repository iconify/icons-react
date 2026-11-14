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
		"content": `<style>.bwea0cckg {
  d: path("M8 21v-7a4 4 0 0 1 8 0v7");
}

.oyxz1j97b {
  d: path("M3 3.5h18V21H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zumwcq4gc {
  d: path("M10.25 6.5h3.5L13 10h-2Z");
}
</style><g class="ulnmmdpxh"><path class="oyxz1j97b"/><path class="bwea0cckg"/><path class="zumwcq4gc"/></g>`,
		"fallback": "uix-sharp:archway",
	});
}

export default Component;
