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
		"content": `<style>.owcfk0-vx {
  cx: 12px;
  cy: 12.75px;
  r: 7.5px;
}

.ufni0bb-t {
  d: path("m6.75 19.5l-1.5 1.75m12-1.75l1.5 1.75M3.5 6.5l3.25-2.75M20.5 6.5l-3.25-2.75M12 10v5.5m-2.75-2.75h5.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="owcfk0-vx"/><path class="ufni0bb-t"/></g>`,
		"fallback": "iconoven:alarm-plus-sharp",
	});
}

export default Component;
