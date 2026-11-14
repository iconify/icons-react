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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.updq09bov {
  d: path("M7.177 8h4.146a1.036 1.036 0 0 1 .927 1.5l-.335.671a1.5 1.5 0 0 1-1.342.829H7.927a1.5 1.5 0 0 1-1.342-.829L6.25 9.5A1.036 1.036 0 0 1 7.177 8m.061 5.75h4.024a1.5 1.5 0 0 1 1.473 1.215l.92 4.75a1.5 1.5 0 0 1-1.473 1.785H6.318a1.5 1.5 0 0 1-1.473-1.785l.92-4.75a1.5 1.5 0 0 1 1.473-1.215");
}

.veqkwccgz {
  d: path("M4 8V4.5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v17H4M4 8h13m0 0v13.5");
}
</style><g class="hntgybcog"><path class="veqkwccgz"/><path class="updq09bov"/></g>`,
		"fallback": "uix:coffee-maker",
	});
}

export default Component;
