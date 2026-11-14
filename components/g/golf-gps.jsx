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
		"content": `<style>.bwbyxw1ao {
  d: path("M12 16.5C10.5 15 9 13 9 11a3 3 0 0 1 6 0c0 2-1.5 4-3 5.5Zm0-5.5h.01");
}

.mro-7ebcq {
  d: path("M6 4.5h12V22H6ZM15 2v2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mro-7ebcq"/><path class="bwbyxw1ao"/></g>`,
		"fallback": "uix-sharp:golf-gps",
	});
}

export default Component;
