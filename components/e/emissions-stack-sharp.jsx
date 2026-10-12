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
		"content": `<style>.n4tbcbbac {
  cx: 11px;
  cy: 5.25px;
  r: 2.5px;
}

.u-2eaqa5y {
  d: path("m5.1 20.51l1.3-9.77l.1-.74h4l.1.74l1.3 9.77l.1.74H5zM6.25 14h4.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yssow-b-l {
  cx: 18.5px;
  cy: 5px;
  r: 2px;
}
</style><g class="x2cwu0gfd"><path class="u-2eaqa5y"/><circle class="n4tbcbbac"/><circle class="yssow-b-l"/></g>`,
		"fallback": "iconoven:emissions-stack-sharp",
	});
}

export default Component;
