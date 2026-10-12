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
		"content": `<style>.sy5ae1b2m {
  d: path("M6.75 9.25h12l.32 1.47l1.86 8.56l.32 1.47H2.75l.32-1.47l1.86-8.56l.32-1.47zm1.25 0V7.5a4 4 0 0 1 8 0v1.75");
}

.wbvnnxx9u {
  d: path("M10 12h4v3h-4z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="sy5ae1b2m"/><path class="wbvnnxx9u"/></g>`,
		"fallback": "iconoven:handbag-sharp",
	});
}

export default Component;
