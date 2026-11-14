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
		"content": `<style>.a4pvfmbuc {
  d: path("M3.5 13a8.5 8.5 0 1 0 17 0a8.5 8.5 0 1 0-17 0Zm6-10.5h5m-2.5 0v2");
}

.d7ni1091r {
  d: path("M12 13V7.5A5.5 5.5 0 0 0 6.5 13Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a4pvfmbuc"/><path class="d7ni1091r"/></g>`,
		"fallback": "uix-sharp:countdown-match",
	});
}

export default Component;
