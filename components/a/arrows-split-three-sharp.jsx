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
		"content": `<style>.fca-dbchs {
  d: path("M5.75 9.75v-4h4m4.5 0h4v4");
}

.wosubxdan {
  d: path("M12 20.25V12L5.75 5.75M12 12l6.25-6.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="wosubxdan"/><path class="fca-dbchs"/></g>`,
		"fallback": "iconoven:arrows-split-three-sharp",
	});
}

export default Component;
