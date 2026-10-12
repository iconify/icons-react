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
		"content": `<style>.gpm03jdto {
  d: path("M12 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z");
}

.o5__hii-l {
  cx: 12px;
  cy: 12px;
  r: 4.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z8unqv8ve {
  d: path("M5 5h14v14H5zm0 4.5H2.75v5H5");
}
</style><g class="x2cwu0gfd"><path class="z8unqv8ve"/><circle class="o5__hii-l"/><path class="gpm03jdto"/></g>`,
		"fallback": "iconoven:gas-cap-sharp",
	});
}

export default Component;
