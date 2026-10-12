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
		"content": `<style>.cl8mo0b0x {
  d: path("M8.25 2.75h7.5v5h-7.5zm-.75 8l1 1l1.75-2M7.5 16l1 1l1.75-2m2.25-4h4m-4 5.25h4");
}

.swz35dp-i {
  d: path("M4.25 5.25h15.5v16H4.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="swz35dp-i"/><path class="cl8mo0b0x"/></g>`,
		"fallback": "iconoven:compliance-check-sharp",
	});
}

export default Component;
