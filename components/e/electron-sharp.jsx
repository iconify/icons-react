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
		"content": `<style>.f5pxjbbaj {
  d: path("M9.75 12h4.5m-.73-8.62a8.75 8.75 0 0 1 7.1 7.1M10.48 20.62a8.75 8.75 0 0 1-7.1-7.1");
}

.pfpt48slt {
  cx: 12px;
  cy: 12px;
  r: 5.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="pfpt48slt"/><path class="f5pxjbbaj"/></g>`,
		"fallback": "iconoven:electron-sharp",
	});
}

export default Component;
