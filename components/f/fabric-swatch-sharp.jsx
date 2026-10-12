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
		"content": `<style>.cwfm10ptf {
  d: path("M2.75 2.75h12.5v12.5H2.75z");
}

.g19i9p55r {
  d: path("M9 8.75h12.25l-.11.23l-.78 1.62l-.11.23l.11.23l.78 1.63l.11.23l-.11.23l-.78 1.62l-.11.23l.11.23l.78 1.62l.11.23l-.11.23l-.78 1.63l-.11.23l.11.23l.78 1.62l.11.23l-.23-.11l-1.62-.78l-.23-.11l-.23.11l-1.63.78l-.23.11l-.23-.11l-1.62-.78l-.23-.11l-.23.11l-1.62.78l-.23.11l-.23-.11l-1.63-.78l-.23-.11l-.23.11l-1.62.78l-.23.11V8.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="cwfm10ptf"/><path class="g19i9p55r"/></g>`,
		"fallback": "iconoven:fabric-swatch-sharp",
	});
}

export default Component;
