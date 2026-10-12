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
		"content": `<style>.a53x0gzdu {
  d: path("M3.5 20.5L10 14l2.85-4.95");
}

.jbt3f_n2v {
  d: path("M14.5 14.5a2 2 0 0 1 3-1.75a2 2 0 0 1 3 1.75c0 2-.5 3-.75 4.5l-.5 2.25h-1l-.75-3l-.75 3h-1l-.5-2.25c-.25-1.5-.75-2.5-.75-4.5Z");
}

.oiqjdxbpf {
  cx: 14.5px;
  cy: 6.25px;
  r: 3.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="a53x0gzdu"/><circle class="oiqjdxbpf"/><path class="jbt3f_n2v"/></g>`,
		"fallback": "iconoven:dental-mirror-sharp",
	});
}

export default Component;
