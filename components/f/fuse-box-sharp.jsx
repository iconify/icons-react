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
		"content": `<style>.haz4ihblf {
  d: path("M8.75 12L10 10l2 4l2-4l1.25 2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zlhvtw3uf {
  d: path("M2.75 5.75v12.5m18.5-12.5v12.5M5.75 7h12.5v10H5.75z");
}
</style><g class="x2cwu0gfd"><path class="zlhvtw3uf"/><path class="haz4ihblf"/></g>`,
		"fallback": "iconoven:fuse-box-sharp",
	});
}

export default Component;
