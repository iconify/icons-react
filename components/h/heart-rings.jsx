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
		"content": `<style>.cunrxub-t {
  d: path("M12 10C9 7.5 7.75 6.25 7.75 4.75s1.25-2.5 2.5-2.5c.75 0 1.5.5 1.75 1.25c.25-.75 1-1.25 1.75-1.25c1.25 0 2.5 1 2.5 2.5S15 7.5 12 10Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v7qiec58o {
  d: path("M6.25 15.75a5.75 5.75 0 1 0 11.5 0a5.75 5.75 0 1 0-11.5 0Z");
}

.zy4sy1mti {
  d: path("M9 15.75a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><g class="ulnmmdpxh"><path class="cunrxub-t"/><path class="v7qiec58o"/><path class="zy4sy1mti"/></g>`,
		"fallback": "uix-sharp:heart-rings",
	});
}

export default Component;
