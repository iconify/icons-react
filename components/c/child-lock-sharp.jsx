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
		"content": `<style>.dxoet9b9p {
  d: path("M10.25 11.5V8h3.5v3.5M9 11.5h6v5H9z");
}

.i9mvhoq2k {
  d: path("M3.5 2.75h17v18.5h-17zm8.5 0V5.5m0 12.75v3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="i9mvhoq2k"/><path class="dxoet9b9p"/></g>`,
		"fallback": "iconoven:child-lock-sharp",
	});
}

export default Component;
