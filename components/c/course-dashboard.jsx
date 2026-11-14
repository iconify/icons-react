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
		"content": `<style>.dgg4o7bhu {
  d: path("M2.5 3.5h19v17h-19Zm0 5h19");
}

.u64s_qb1i {
  d: path("M6 12h4.5v5H6Zm8 3v2m3-4.5V17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dgg4o7bhu"/><path class="u64s_qb1i"/></g>`,
		"fallback": "uix-sharp:course-dashboard",
	});
}

export default Component;
