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
		"content": `<style>.jx4kssztm {
  d: path("M12.75 17.25h3.5m-11.5-7h14.5M8 7c-.9-1.25.9-2.5 0-3.75M12 7c-.9-1.25.9-2.5 0-3.75M16 7c-.9-1.25.9-2.5 0-3.75");
}

.p7yvogb3i {
  cx: 8px;
  cy: 17.25px;
  r: 1.75px;
}

.toeh55bsm {
  d: path("M3.75 13.25h16.5v8H3.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="toeh55bsm"/><circle class="p7yvogb3i"/><path class="jx4kssztm"/></g>`,
		"fallback": "iconoven:hot-plate-sharp",
	});
}

export default Component;
