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
		"content": `<style>.dnxalmgga {
  cx: 8.25px;
  cy: 4.75px;
  r: 1.75px;
}

.okmc-p4gg {
  d: path("M8.25 8.5v3.75");
}

.vaecrkbbe {
  d: path("M5 21.25h2.5L17 9.75h2a2.25 2.25 0 0 0 0-4.5h-2.5L7 16.75H5a2.25 2.25 0 0 0 0 4.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vaecrkbbe"/><circle class="dnxalmgga"/><path class="okmc-p4gg"/></g>`,
		"fallback": "iconoven:escalator-sharp",
	});
}

export default Component;
