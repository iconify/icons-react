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
		"content": `<style>.fqjxzbbzx {
  d: path("M10.75 9.25V8H12");
}

.gqo-i195c {
  d: path("M12 5.25a3.25 2.75 0 1 1 0 5.5a3.25 2.75 0 1 1 0-5.5Z");
}

.l4xlbvbpq {
  d: path("M12 2.75a5.75 5.25 0 1 1 0 10.5a5.75 5.25 0 1 1 0-10.5Zm-1.25 11h2.5v7.5h-2.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="l4xlbvbpq"/><path class="gqo-i195c"/><path class="fqjxzbbzx"/></g>`,
		"fallback": "iconoven:hand-mirror-sharp",
	});
}

export default Component;
