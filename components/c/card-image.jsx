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
		"content": `<style>.qm_3ftbkj {
  d: path("M3 3.5h18v17H3ZM3 14h18");
}

.ukk5i1bfk {
  d: path("m6 11l3-3l3 3m4-3.5h.01M6.5 17.25H12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qm_3ftbkj"/><path class="ukk5i1bfk"/></g>`,
		"fallback": "uix-sharp:card-image",
	});
}

export default Component;
