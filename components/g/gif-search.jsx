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
		"content": `<style>.hdo1ayb-t {
  d: path("m7.25 2l2 2l-2 2m8 11.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm4 1.75L21 21");
}

.n-i8s48ix {
  d: path("m11.25 13.5l-2 2l2 2m-4.875-2.77A5.75 5.75 0 0 1 9.25 4");
}

.scqlh1bqt {
  d: path("M12.125 4.77A5.75 5.75 0 0 1 9.25 15.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="scqlh1bqt"/><path class="n-i8s48ix"/><path class="hdo1ayb-t"/></g>`,
		"fallback": "uix-sharp:gif-search",
	});
}

export default Component;
