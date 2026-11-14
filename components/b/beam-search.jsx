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
		"content": `<style>.gt5j_ub9q {
  d: path("M12.5 19.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM10.75 6.25L6.5 12l-3 8m3-8l3 8m7.5-8l3.5 8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ykp12hbwz {
  d: path("M10 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm3.25 1.75L17 12l-1.75 5.5");
}
</style><g class="ulnmmdpxh"><path class="ykp12hbwz"/><path class="gt5j_ub9q"/></g>`,
		"fallback": "uix-sharp:beam-search",
	});
}

export default Component;
